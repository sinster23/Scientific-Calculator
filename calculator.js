   
var display=document.getElementById('#disp');
    let para=document.getElementById('tax');
    let instr=document.getElementById('instr');
    let bt=document.querySelectorAll('#buttons');
    let oper=Array.from(document.getElementsByClassName('oper1'));
    let flag=new Array(oper.length).fill(false);
    let result='';
    let com=0,per=0;
    let fl=0,pl=0;
    let x='',y='';
    let res='',answer='';
    let rplc='';
    let md=0;
    let a='',b='',c='';
   let mq=0,mdet=0,mder=0,mmat=0;

    bt.forEach(item=>{
        item.addEventListener('click',(e)=>{
            bttext=e.target.value;
            if(bttext=='1'&& md==1){
            display.value='';md=0;mq=1;return;}
            if(bttext=='3'&& md==1){
                display.value='det([';md=0;mdet=1;return;}
                if(bttext=='2'&& md==1){
                    display.value='';mder=1;md=0;return;}
                    if(bttext=='4'&& md==1){
                        display.value='[[';mmat=1;md=0;return;}
            if(bttext=='+'){
                if(display.value.charAt(display.value.length-1)=='+')
                return;}
                if(bttext=='-'){
                    if(display.value.charAt(display.value.length-1)=='-')
                    return;}
            if(bttext=='x'){
                if(display.value.charAt(display.value.length-1)=='*')
                return;
            else
            bttext='*';
            }
            if(bttext=='÷'){
                if(display.value.charAt(display.value.length-1)=='/'){
                display.value=display.value.slice(0,-1)+'i';return;}
            else
            bttext='/';}
            if(bttext=='.'){
                if(display.value.charAt(display.value.length-1)=='.'){
                    if(mdet==1){
                    display.value=display.value.slice(0,-1)+', ';return;}
                    else{
                display.value=display.value.slice(0,-1)+',';return;}}
            
                else if(display.value.charAt(display.value.length-1)==',' ||display.value.charAt(display.value.length-1)==' '){
                    if(mdet==1){
                        display.value=display.value.slice(0,-2)+'; ';return;}
                        else{
                    display.value=display.value.slice(0,-1)+';';return;}}
            else
            bttext='.';}
            if(com==1){
                res=' '+display.value;
                for(let i=res.indexOf('C')-1;i>=0;i--){
                    
                    if(res[i]==' '||res[i]=='+'||res[i]=='-'||res[i]=='*'||res[i]=='/'){
                    x=res.substring(i+1,res.indexOf('C'));
                    break;}
                }
                
                com=0;res='';
            }
            if(per==1){
                res=' '+display.value;
                for(let i=res.indexOf('P')-1;i>=0;i--){
                    
                    if(res[i]==' '||res[i]=='+'||res[i]=='-'||res[i]=='*'||res[i]=='/'){
                    x=res.substring(i+1,res.indexOf('P'));
                    break;}
                }
                
                per=0;res='';
            }
    
            display.value+=bttext;
            
        })
    })

    function alc(){
        fl=0;pl=0;md=0;
        display.value='';
    }
    function calcsin(){
        display.value+="sin(";
      
    }
    function calccos(){
       
        display.value+="cos(";
       
    }
    function calctan(){
       
        display.value+="tan(";
       
    }
    function del(){
        if(display.value=='sin'||display.value=='cos'||display.value=='tan'||display.value=='log'||display.value=='ln' ||display.value=='sqrt')
        display.value='';
        display.value=display.value.toString().slice(0,-1);
        if(display.value.length<=1)
        fl=0,pl=0;
    }
    function calcresult(){
        
        result=display.value;
       try{
            result=result.replace(/sin\(/g,'sin(' +Math.PI/180+'*');
            result=result.replace(/cos\(/g,'cos(' +Math.PI/180+'*');
            result=result.replace(/tan\(/g,'tan(' +Math.PI/180+'*');
            result=result.replace(/ln\(/g,'log(' );
            result=result.replace('π','pi');
            result=result.replace(/log\(/g,1/2.303+'*'+'log(');
            result=result.replace(/sin-1\(/g,180/Math.PI+'*'+'asin(');
            result=result.replace(/cos-1\(/g,180/Math.PI+'*'+'acos(');
            result=result.replace(/tan-1\(/g,180/Math.PI+'*'+'atan(');
            if(fl==1){
                if(display.value==rplc && parseInt(x)>parseInt(y))
                display.value=answer;
            else
            display.value='ERROR';
            }
        
           else if(pl==1 ){
                if(display.value==rplc && parseInt(x)>parseInt(y))
                display.value=answer;
            else
            display.value='ERROR';
       
            }
        
           else
            display.value=math.evaluate(result);
       }
      catch(error){
        display.value="SYNTAX ERROR";
      }    
      fl=0;pl=0;
    }

    function fact(){
      
        display.value+='!';
    }

    function myfunc(){
       for(var i=0;i<oper.length;i++){
        if( flag[i]==false){
            oper[i].style.display="inline";
            flag[i]=true;
        }
        else {
            oper[i].style.display="none";
            flag[i]=false;
        }
       }
    }
    function calcpow(){
        display.value+='^';
        
       }
    function br1(){
        
        display.value+='(';
    }
    function br2(){
      
        display.value+=')';
        if(fl==1){
            for(let i=display.value.length-2;i>=0;i--){
                if(display.value[i]=='('){
                y=display.value.substring(i+1,display.value.length-1);break;}
            }
          
           answer=fact(x) / fact(y) / fact(x - y);
           rplc=x+'C('+y+')';
        }
        if(pl==1){
            for(let i=display.value.length-2;i>=0;i--){
                if(display.value[i]=='('){
                y=display.value.substring(i+1,display.value.length-1);break;}
            }
          
            answer= fact(x) / fact(x - y);
           
           rplc=x+'P('+y+')';
          
        }
    }
    function br3(){
        if(display.value==''||display.value.charAt(display.value.length-1)==','||display.value.charAt(display.value.length-1)=='+'||display.value.charAt(display.value.length-1)=='-'||display.value.charAt(display.value.length-1)=='*'||display.value.charAt(display.value.length-1)=='[')
        display.value+='[';
    else
    display.value+=']';
    }
    function sqroot()
    {
        display.value+='sqrt('
    }
    function ln(){
        display.value+='ln('
    }
    function lg(){
        display.value+='log('
    }
    function invsin(){
        if(mder==1)
        display.value+='asin('
       else
        display.value+='sin-1(';
    }
    function acos(){
        if(mder==1)
        display.value+='acos('
       else
        display.value+='cos-1(';
    }
    function atan(){
        if(mder==1)
        display.value+='atan('
       else
        display.value+='tan-1(';
    }
    function pi(){
        display.value+='π';
    }
    function exp(){
        display.value+='e';
    }
    function toRadian(){
        display.value=(Math.PI/180)*display.value;
    }
    function combination(){
        if(display.value=='')
        return;
        display.value+='C(';
        com=1;
        fl=1;
    }
    function permutation(){
        if(display.value=='')
        return;
        display.value+='P(';
        per=1;
        pl=1;
    }


    function fact( n)
    {
        if(n==0)
        return 1;
        let ans = 1;
        for (let i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    }
    function mode(){
        if(md==0 && mq==0 && mdet==0 && mder==0 && mmat==0){
        display.value='1.QUADRATIC  2.DERIVATIVE  3.DETERMINANT  4.MATRIX';
        md=1;}
        else if(mq==1)
        quad();
        else if(mdet==1)
        det();
        else if(mder==1)
        der();
        else if(mmat==1)
        mat();
    }
    function quad()
    {   let root1='',root2='';
        a=display.value.substring(0,display.value.indexOf('x^2'));
        b=display.value.substring(display.value.indexOf('x^2')+3,(display.value.indexOf('x+')!=-1)?display.value.indexOf('x+'):display.value.indexOf('x-'));
        c=display.value.substring((display.value.indexOf('x+')!=-1)?display.value.indexOf('x+')+1:display.value.indexOf('x-')+1,display.value.length);
        if(a=='')
        a='1';
        if(b=='+')
        b='1';
        if(b=='-')
        b='-1';
        if(c=='+')
        c='1';
        if(c=='-')
        c='-1';
       if(b.indexOf('+')!=-1)
       b=b.substring(1,b.length);
       if(c.indexOf('+')!=-1)
       c=c.substring(1,c.length);
        
        let discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            root1 = Math.floor(((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2));
            root2 = Math.floor(((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2));
            mq=0;
            display.value=`x=${root1},${root2}`;
        }

            else if (discriminant == 0) {
                root1 = root2 = (-b / (2 * a));
                mq=0;
                display.value=`x=${root1},${root2}`;
            }
                else {
                    let realPart = Math.floor((-b / (2 * a)).toFixed(2));
                    let imagPart = Math.floor((Math.sqrt(-discriminant) / (2 * a)).toFixed(2));
                    mq=0;
                    display.value=`x=${realPart}+${imagPart}i,${realPart}-${imagPart}i`;
                }
    }
    function det(){

        display.value=math.evaluate(display.value);
        mdet=0;
    }
    function der()
    {
        let scr=display.value;
        display.value=math.derivative(scr,'x');
        mder=0;
    }
   function mat(){
    let operator=((display.value.indexOf('+')!=-1)?'+':(display.value.indexOf('-')!=-1)?'-':'*');
    let ak=display.value.substring(0,display.value.indexOf(operator));
    let bk=display.value.substring(display.value.indexOf(operator)+1,display.value.length);
    
    ak=ak.replaceAll('[','');
    ak=ak.replaceAll(']','');
    ak=ak.split(',');
    let str1=[];
    for(let i=0;i<ak.length;i+=2){
      let a=[ak[i+0] , ak[i+1] ];
      str1.push(a);
    }
    bk=bk.replaceAll('[','');
    bk=bk.replaceAll(']','');
    bk=bk.split(',');
    let str2=[];
    for(let i=0;i<bk.length;i=i+2){
        let b;
        if(operator=='-')
        b=[-bk[i+0] , -bk[i+1] ];
    else
       b=[bk[i+0] , bk[i+1] ];
      str2.push(b);}

    if(operator=='+')
    display.value=math.add(math.matrix(str1),math.matrix(str2));
    if(operator=='-')
    display.value=math.add(math.matrix(str1),math.matrix(str2));
    if(operator=='*')
    display.value=math.multiply(math.matrix(str1),math.matrix(str2));
    mmat=0;
    
   }

   function fun(){
     if(instr.value=="View Instructions"){
      para.style.display="block";
      
      instr.value='Hide Instructions';
     }
     else{
       
        para.style.display="none";
        instr.value='View Instructions';
     }
   }
    