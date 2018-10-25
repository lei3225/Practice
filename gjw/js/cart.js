class Car{
    constructor(){
        this.tbody = $("tbody");
        this.load();
    }
    load(){
        var that = this;
        $.ajax({
            type:"get",
            url:"../data/goodsInfo.json",
            dataType:"json",
            success:function (res) {
                that.res = res;
                that.display();
                that.init();
                that.remove();
            }
        })
    }
    display(){
        var str = "";
        this.shop = JSON.parse($.cookie("goods"));
        for (var i = 0;i<this.res.length;i++){
            for(var j = 0;j<this.shop.length;j++){
                if(this.res[i].goodsId == this.shop[j].id){
                    str += `<tr data-index="${this.res[i].goodsId}">
                            <td class="td1">
                                  <img src="${this.res[i].src}"/>
                            </td>
                            <td class="td2">${this.res[i].name}</td>
                            <td class="td3">${this.res[i].price}</td>
                            <td class="td4">0.00</td>
                            <td class="td5">
                                <input type="number" value="${this.shop[j].num}" min="1">
                            </td>
                            <td class="td6" id="allPrice">${(this.shop[j].num)*(this.res[i].price)}</td>
                            <td class="td7"><em data-index="">删除</em></td>
                        </tr>`
                }
            }
        }
        this.tbody.html(str);
        
        var td6 = $(".td6");
        var iptNum = $(".td5 input")
        var sum =0;
        var numSum = 0;
        for (var i = 0;i<td6.length;i++){
            sum += parseInt(td6[i].innerHTML);
        }
        for(var i = 0;i<iptNum.length;i++){
            numSum += parseInt(iptNum[i].value)
        }
        // console.log(numSum);
        // console.log(sum);
        $("#TotalPrice").html(sum +".00");
        $("#totalNum").html(numSum);


    }
    init(){
        var that = this;
        this.tbody.on("input","input",function () {
            var index = $(this).parent().parent().attr("data-index");
            that.changeNum($(this),index)
            that.display();
            //window.location.reload();//每次都加载会很卡，选用上行代码直接渲染就行
        })
        $(".box").on("click","a",function () {
            var index = $(this).parent().attr("data-id");
            that.setCookie(index);
        })
    }
    changeCookie(index,fn){
        var arr = JSON.parse($.cookie("goods"));
        for(var i = 0;i<arr.length;i++){
            if(arr[i].id == index){
                fn(arr,i);
            }
        }
        $.cookie("goods",JSON.stringify(arr));
    }
    changeNum(ele,index){
        this.changeCookie(index,function (arr,i) {
            arr[i].num = ele.val();
        })
    }
    remove(){
        var that = this;
        this.tbody.on("click","em",function () {
            var index = $(this).parent().parent().attr("data-index");
            that.changeCookie(index,function (arr,i) {
                arr.splice(i,1);
            })
            $(this).parent().parent().remove();
            that.display();
            //window.location.reload();//每次都加载会很卡，选用上行代码直接渲染就行
        })
    }
}
new Car();



