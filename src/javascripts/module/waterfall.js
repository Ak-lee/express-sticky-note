
var WaterFall = (function(){
    var $container;
    var $items;
  
    function render($c){
      $container = $c;
      $items = $container.children();
  
      var nodeWidth = $items.outerWidth(true),
        colNum = parseInt($(window).width()/nodeWidth),
        colSumHeight = [];
  
      for(var i = 0; i<colNum;i++){
        colSumHeight.push(0);
      }
  
      $items.each(function(){
        var $current = $(this);
  
        var idx = 0,
          minSumHeight = colSumHeight[0];
  
        for(var i=0;i<colSumHeight.length; i++){
          if(colSumHeight[i] < minSumHeight){
            idx = i;
            minSumHeight = colSumHeight[i];
          }
        }
  
        $current.css({
          left: nodeWidth*idx,
          top: minSumHeight
        });
        colSumHeight[idx] = $current.outerHeight(true) + colSumHeight[idx];
      });
    }
  
    $(window).on('resize', function(){
      render($container);
    })
  
    return {
      init: render
    }
  })();
  
  module.exports = WaterFall  