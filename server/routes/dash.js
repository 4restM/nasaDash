
function generateServerRoutes(server){
  
  server.get('/', (req,res) => {
    res.end('server is working')
  });

}

module.exports = generateServerRoutes