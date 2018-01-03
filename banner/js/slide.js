//����һ���ֲ��Ĺ��캯��
function Slide(box){//box �ֲ������� '.box'
    this.box = $(box);//��ȡ�ֲ�����
    this.imgBox =this.box.children().eq(0);//��ȡ�ֲ�ͼƬ���� .slide-img
    this.textBox =this.box.children().eq(1);//��ȡ�ֲ�ͼƬ���� .slide-tetx
    this.len = this.imgBox.children().length;//��ȡͼƬ������
    this.page=0;
    this.play=true;
    //ִ�г�ʼ��
    this.init();
}

//ͨ��ԭ����ӷ��� move ִֻ���л�Ч��
Slide.prototype.move=function(){
    this.imgBox.stop().animate({"left":-666*this.page},800);
    this.textBox.children().eq(this.page).addClass("active").siblings().removeClass("active");
}
//����һ���Զ��л��ĺ���
Slide.prototype.auto=function(){
    var _this_ = this;
    if(this.play){
        this.move();
        this.page++;
        this.page%=this.len; // = > page = page % len
        console.log(this)
    }
    setTimeout(function(){
        _this_.auto();
    },1000)
}
//���������ͣ����ͣ�Զ�����
Slide.prototype.hoverEvent=function(){
    var _this_ = this;
    this.box.hover(function(){
        _this_.play=false;
    },function(){
        _this_.play=true;
    })
}
//����һ���ֲ���ʼ������
Slide.prototype.init=function(){
    this.auto();
    this.hoverEvent();
}


//�����ֲ�����
    var s1 = new Slide('#s1');
    var s2 = new Slide('#s2');
    var s3 = new Slide('#s3');
