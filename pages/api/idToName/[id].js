// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Innertube } from 'youtubei.js';

export default async function handler(req, res) {
    const { id } = req.query
    const youtube = await Innertube.create();
    youtube.getChannel(id)
        .then(channel => {
            res.status(200).json({status:200, name:channel.header.author.name})

        
    })
    .catch((e)=>{
        res.status(400).json({status:400,error:e.message})
    })
}
