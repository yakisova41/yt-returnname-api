// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Innertube } from 'youtubei.js';
import Cors from 'cors'

const cors = Cors({
    methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(
    req,
    res,
    fn
) {
    return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
        if (result instanceof Error) {
        return reject(result)
        }

        return resolve(result)
    })
    })
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors)
    
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
