var http=require('http')
http.createServer(function(req,res){
    if(req.url=='/'){
        res.write("Home Page ")
    }
    else if(req.url=='/exam'){
        res.write(`<html><head><body><a href="https://drive.google.com/drive/folders/1hfcXTOyvJGNnjBw6z6ovVC-GxGJT0FY5"/>This is a exam link</body></head></html>`)
    }
    else if(req.url=='/exam/semester_end'){
        res.write(`<html><head><body><a href="https://result.ganpatuniversity.ac.in/">This is a Result link</body></head></html>`)
    }

    res.end();
}).listen(8091)