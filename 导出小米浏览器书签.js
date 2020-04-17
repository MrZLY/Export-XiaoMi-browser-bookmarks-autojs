//html开头
var testtxt="<!DOCTYPE NETSCAPE-Bookmark-file-1>\n<!-- This is an automatically generated file.\nIt will be read and overwritten.\nDO NOT EDIT! -->\n";
testtxt=testtxt+"<META HTTP-EQUIV=\"Content-Type\" CONTENT=\"text/html; charset=UTF-8\">\n<TITLE>Bookmarks</TITLE>\n<H1>Bookmarks</H1>\n<DL><p>\n";
testtxt=testtxt+"    <DT><H3 >小米浏览器书签</H3>\n   <DL><p>\n";
files.write("/storage/emulated/0/aaZLY/小米浏览器书签导出.txt",testtxt);
bookmark();//书签
//结尾
files.append("/storage/emulated/0/aaZLY/小米浏览器书签导出.txt","    </DL><p>\n</DL><p>");
toast("结束");
function bookmark() {//遍历输出书签
    var list = id("bookmark_list_view").findOnce();
    log("个数"+list.children().length);
    list.children().forEach(function(elem){
        if(elem.findOne(id("url"))==null){//书签夹
            elem.click();
            sleep(200);
            bookmark_folder();
            back();
            sleep(200);
            
        }
        else{//普通书签
            print_bookmark( elem.child(0).text(),elem.child(1).text() );
        }
    });

    

}
function bookmark_folder(){//解决一个标签文件夹
    //标题
    var title=id("action_bar_title").findOnce();
    print_title(title.text());
    //书签
    files.append("/storage/emulated/0/aaZLY/小米浏览器书签导出.txt","      <DL><p>\n");   
    var list = id("bookmark_list_view").findOnce();
    //toast(list.length);
    list.children().forEach(function(elem){
        print_bookmark( elem.child(0).text(),elem.child(1).text() );
        
    });
    files.append("/storage/emulated/0/aaZLY/小米浏览器书签导出.txt","      </DL><p>\n");
}
function print_title(name) {//用于向文件输出一个文件夹标题
    let text="      "+"<DT><H3 >"+name+"</H3>"+"\n";
    files.append("/storage/emulated/0/aaZLY/小米浏览器书签导出.txt",text);
}
function print_bookmark(name,url) {//用于向文件输出一个标签
    let text="          "+"<DT><A HREF=\""+url+"\" >"+name+"</A>"+"\n";
    files.append("/storage/emulated/0/aaZLY/小米浏览器书签导出.txt",text);
}