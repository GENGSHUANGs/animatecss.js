# animatecss.js

animate.css 的配套js 

usage:
```javascript
$(document.body).animatecss('zoomIn',function(){
        // $(this).xxx ,done 
        // 这里的zoomIn 等 class 已经被删除
});

$('.page-item').animatecss('zoomIn',true,function(removeclass){
        $(this).hide();
        removeclass(); // 在某些特定情况下,zoomIn等class 需要延迟删除，否则会出现闪屏
});

```
