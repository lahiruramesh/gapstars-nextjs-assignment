import { writeFileSync } from "fs";

// Write damage report to file
export default async function submit(req, res) {
    if (req.method !== "POST") {
      return res.status(405);
    }
    console.log(req.body);
    const uuid = Math.random().toString(26).slice(2);
    const record = {...req.body,uuid};
    await writeFileSync(`./public/db/${uuid}.json`, JSON.stringify(record));
    setTimeout(() => {
      return res.status(201).json({ uuid });
    }, 200)
}


