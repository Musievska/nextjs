//in these folder api in the files we white funcs which contains server side code, api folder always run in the server, never on the client side
// /api/new-meetup
// POST/api/new-meetup => to be sure only post requests will trigure


function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        
    }
}

export default handler;