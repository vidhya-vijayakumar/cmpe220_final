var lineReader = require('line-reader');

function sendPage(fileName, result)
{
    var html = '';

    lineReader.eachLine (fileName,
        function(line,last) 
    {
        html += line + '\n';  

        if (last)
        {
            result.send(html);
            return false;
        }
        else
        {
            return true;
        }
    });
}

module.exports.index = function(req,res)
{
    console.log(req.session);
    res.render('homepage', {
        title: 'FireFighters - The Desire to Serve, The Courage to Act, The Ability to Perform'
    });
};

module.exports.login = function(request,result)
{
    sendPage('login.html',result);
};

module.exports.main = function(req,res)
{
    console.log(req.session.passport.user);
    res.render('main');
};

module.exports.tableau = function(request,result)
{
    sendPage('tableau.html',result);
};

module.exports.newuser = function(request,result)
{
    sendPage('newuser.html',result);
};

module.exports.tabs = function(request,result)
{
    sendPage('tabs.html',result);
};

module.exports.aboutus = function(request,result)
{
    sendPage('tabs.html',result);
};

module.exports.draganddrop = function(request,result)
{
    sendPage('draganddrop.html',result);
};