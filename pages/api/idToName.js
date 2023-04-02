// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const config = {
    runtime: 'edge',
}

export default async function handler(req, res) {

    return new Response("[Return YouTube Comment Username] Please update to the latest version🌝", {
        status: 200,
        headers: {
            "content-type":"text/plain; charset=UTF-8",
            "Access-Control-Allow-Origin":"*"
        }
    })      
      
}
