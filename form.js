
    let m="nataliacastell@iesmontsia.org";
    let r="Natalia.123" ;
    let imputCorreu;
    let clic= 0;
    let correu= false;
    let exprexio;
    let boto= true;


    function validar_correu(){
        imputCorreu=document.getElementById("email").value;
        expresio=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(imputCorreu); 
        if (expresio== true){
            correu=true;
            document.getElementById("email").style.borderColor="34840c";
            return correu;

        }else{
            correu == false;
            alert("Recorda que el correu ha de conteri '@' i un domini com: /.com /.es");
            document.getElementById("email").style.borderColor="9f0303";
            document.getElementById("email").style.backgroundColor="ffaeae";
            return correu;
        }
    }

    function validador(){
        let paswrd= document.getElementById("pwd").value;
       
        if (imputCorreu==m&paswrd==r){
            document.getElementById("email").style.borderColor="34840c";
            document.getElementById("pwd").style.borderColor="34840c";
            document.getElementById("email").style.backgroundColor="c7f5af";
            document.getElementById("pwd").style.backgroundColor="c7f5af";
            alert("Dades Validades =====> Redirigint");
            window.location.href = "https://moodle.iesmontsia.org/";
            }else if(imputCorreu!==m&paswrd!==r){
                document.getElementById("email").style.borderColor="9f0303";
                document.getElementById("pwd").style.borderColor="9f0303";
                document.getElementById("email").style.backgroundColor="ffaeae";
                document.getElementById("pwd").style.backgroundColor="ffaeae";
                alert("Cap de les dades son correctes! ");
            }else{
                document.getElementById("email").style.borderColor="d97007";
                document.getElementById("pwd").style.borderColor="d97007";
                document.getElementById("email").style.backgroundColor="ffce9d";
                document.getElementById("pwd").style.backgroundColor="ffce9d";
                alert("Algo no va bé, revisa que les dos dades son correctes");
            }
    }
    function activaboto(){
        boto= true
        clic= 0;
    }
    function retrasa5segons () {
        setTimeout(() => {
                validador();
                }, 5000);
        setTimeout(() => {
                activaboto();
                }, 5000);
    }

    function enviar5segons (){
            document.getElementById("email").style.borderColor="black";
            document.getElementById("pwd").style.borderColor="black";
            document.getElementById("email").style.backgroundColor="white";
            document.getElementById("pwd").style.backgroundColor="white";
            if (boto =true& clic==0){
                if (correu= validar_correu()==true){
                    boto= false;
                    retrasa5segons();
                } clic ++;
               
            }else if(boto = false&&clic >= 1){
                setTimeout(() => {
                activaboto();
                }, 5000);
            }else{
                setTimeout(() => {
                activaboto();
                }, 5000);
            }
        }
    

