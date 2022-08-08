import fs from "fs/promises";
import path from "path";

export default async function getReport(req, res) {
    
    if (req.method !== "GET") {
      return res.status(405);
    }

    let data = [];
    const files = await fs.readdir('./public/db/');

    if(files) {
        files.forEach(async (file) => {
            if(path.extname(file) === '.json') {
                const record = await fs.readFile(`./public/db/${file}`, "utf8");
                data.push(JSON.parse(record));
            }
        });

        setTimeout(() => {
            return res.status(200).json(data)
        }, 200)
    }
}