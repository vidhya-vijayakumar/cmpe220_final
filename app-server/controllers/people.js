var lineReader = require('line-reader');
var fs = require('fs');

function sendPage(fileName, response)
{
    var html = '';

    lineReader.eachLine (fileName,
        function(line,last) 
    {
        html += line + '\n';  

        if (last)
        {
            response.send(html);
            return false;
        }
        else
        {
            return true;
        }
    });
}

module.exports.riya = function(req,res)
{
    res.send(fs.readFileSync('people/riya.html', {encoding: 'utf-8'}));
    //sendPage('../people/Nethra.html',result);
};

module.exports.sanjana = function(request,response)
{
    sendPage('people/sanjana.html',response);
};


module.exports.vidhya = function(request,response)
{
    sendPage('people/Vidhya.html',response);
};
