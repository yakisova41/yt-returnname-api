// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors'
import { parse } from 'node-html-parser';

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
    runMiddleware(req, res, cors)

    const { id } = req.query
    const response = await fetch(`https://www.youtube.com/channel/${id}/about`)
    
    if(response.status !== 200){
        res.send("error")          
    }
    else{
        response.text()
        .then(text =>{
            const parser = parse(text)
            const title = parser.querySelector('title')
            res.send(title.innerHTML.split(' - ')[0])
        })        
    }    
}
