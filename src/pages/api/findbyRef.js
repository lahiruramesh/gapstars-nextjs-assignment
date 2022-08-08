import fs from "fs/promises";
import path from "path";

export default async function findbyRef(req, res) {
    if (req.method !== "GET") {
        return res.status(405);
    }

    const {refId} = req.query;
    console.log(refId);
    if(!refId) {
        return res.status(400).json({"status": 0, "message": "Invalid Request"});    
    }

    const files = await fs.readdir('./public/db/');
    if(files) {
        const selected = files.filter(file => {
            if(path.extname(file) === '.json') {
                if(file.split('.json')[0] == refId) return file;     
            }
            return null;
        })

        if(selected !== []) {
            console.log('filzzze', selected);
            const record = await fs.readFile(`./public/db/${selected}`, "utf8");
                
            if(record) {
                return setTimeout(() => {
                    return res.status(200).json({"status": 1, "message": "1","data":JSON.parse(record)})
                }, 200);
            }

        }
    }
    
    return setTimeout(() => {
        return res.status(200).json({"status": 1, "message": "0","message": "No record found"})
    }, 200);
    
    
}