function displayImage(){
    let arn_value = document.getElementById("ARN").value;
    let arn_value_up = arn_value.toUpperCase();
    fetchImage(arn_value_up);
}

function fetchImage(x){
    if (x.length == 3) {

            if (x == "UUU" || x == "UUC") {
            document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/8/8b/L-phenylalanine-2D-skeletal.png">';
            document.getElementById("imageAcide").alt = "Image de Phe (Phénylalanine)";
            } 

            if (x == "UUA" || x == "UUG" || x == "CUU" || x == "CUC" || x == "CUA" || x == "CUG") {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/L-leucine-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 

            if (x == "AUU" || x == "AUC" || x == "AUA")     {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/L-isoleucine-skeletal.svg">';
                document.getElementById("imageAcide").alt = "Image de ";
            } 
            if (x == "AUG") {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/d/d8/L-methionine-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "GUU" || x == "GUC" || x == "GUA" || x == "GUG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/L-valine-skeletal.svg">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "UCU" || x == "UCC" || x == "UCA" || x == "UCG" || x == "AGU" || x == "AGC")
            {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/5/57/L-serine-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                }      
            if (x == "CCU" || x == "CCC" || x == "CCA" || x == "CCG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/L-proline-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
            } 
            if (x == "ACU" || x == "ACC" || x == "ACA" || x == "ACG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/L-threonine-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "GCU" || x == "GCC" || x == "GCA" || x == "GCG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/0/05/L-alanine-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
            } 
            if (x == "UAU" || x == "UAC")               {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/2/2e/L-tyrosine-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "CAU" || x == "CAC")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Histidine_wpmp.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "CAA" || x == "CAG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Glutamine_wpmp.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                    } 
            if (x == "AAU" || x == "AAC")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/8/85/L-asparagine-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "AAA" || x == "AAG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/L-lysine-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "GAU" || x == "GAC")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Aspartate_wpmp.png">';
                document.getElementById("imageAcide").alt = "Image de ";
            } 
            if (x == "GAA" || x == "GAG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Glutamine_wpmp.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "UGU" || x == "UGC")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Cysteine_wpmp.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "UGG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/L-tryptophan-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                    } 
            if (x == "CGU" || x == "CGC" || x == "CGA" || x == "CGG" || x == "AGA" || x == "AGG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/L-arginine-skeletal-%28tall%29.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "GGU" || x == "GGC" || x == "GGA" || x == "GGG")                {
                document.getElementById("displayImageDiv").innerHTML = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Glycine-2D-skeletal.png">';
                document.getElementById("imageAcide").alt = "Image de ";
                } 
            if (x == "UAA" || x == "UAG" || x == "UGA")                {
                document.getElementById("displayImageDiv").innerHTML = "Codon STOP";
                }         
 
        } 

   else {
    document.getElementById("displayImageDiv").innerHTML = ''; 
    }
}


function generate_row(nom, nom_court, image_lien){
    // fonction qui genere une ligne de plus pour chaque bond de 3
    // 3 cellules; une pour chaque info

    let table = document.getElementById("outputTable");

    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = nom;
    cell2.innerHTML = nom_court;
    cell3.innerHTML = image_lien;

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


   // fonction qui parcours ARN sequence par bond de 3 et les traite

async function parcoursARN_long(){
    let arn_long_init = document.getElementById("inputARN_long").value.toUpperCase();
    
    // #1 verifier que la sequence peut etre lue length mod3 == 0
    if (arn_long_init.length % 3 == 0){

        document.getElementById("sequence_animer").innerHTML = arn_long_init;

        let i = 0; 
        while (i < arn_long_init.length) {
            
            let arn_long = arn_long_init.substr(i, 3);

            let imageARN_long = '';
            let nomEntier = "";
            let nomCourt = "";
            let color ="";
        

        if (arn_long == "UUU" || arn_long == "UUC") {
            imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/8/8b/L-phenylalanine-2D-skeletal.png">';
            nomEntier = "Phénylalanine";
            nomCourt = "Phe";
            color = "red";
            
            //document.getElementById("animation").innerHTML += `<span style="color: ${color};">${arn_long}</span>`;
            
            
        }
        
        if (arn_long == "UUA" || arn_long == "UUG" || arn_long == "CUU" || arn_long == "CUC" || arn_long == "CUA" || arn_long == "CUG") {
            imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/L-leucine-2D-skeletal.png">';
            nomEntier = "Leucine";
            nomCourt = "Leu";  
            //document.getElementById("animation").innerHTML += "<span style=\"color: red;\">".$arn_long;
        }

        if (arn_long == "AUU" || arn_long == "AUC" || arn_long == "AUA") {
            imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/e/e8/L-isoleucine-skeletal.svg">';
            nomEntier = "Isoleucine";
            nomCourt = "Ile";
            
        }
        
        if (arn_long == "AUG") {
            imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/d/d8/L-methionine-2D-skeletal.png">';
            nomEntier = "Méthionine";
            nomCourt = "Met";
        }
        
        if (arn_long == "GUU" || arn_long == "GUC" || arn_long == "GUA" || arn_long == "GUG") {
            imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/L-valine-skeletal.svg">';
            nomEntier = "Valine";
            nomCourt = "Val";
        }
        
        if (arn_long == "UCU" || arn_long == "UCC" || arn_long == "UCA" || arn_long == "UCG" || arn_long == "AGU" || arn_long == "AGC") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/5/57/L-serine-2D-skeletal.png">';
             nomEntier = "Sérine";
             nomCourt = "Ser";
        }
        
        if (arn_long == "CCU" || arn_long == "CCC" || arn_long == "CCA" || arn_long == "CCG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/L-proline-2D-skeletal.png">';
             nomEntier = "Proline";
             nomCourt = "Pro";
        }
        
        if (arn_long == "ACU" || arn_long == "ACC" || arn_long == "ACA" || arn_long == "ACG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/L-threonine-skeletal.png">';
             nomEntier = "Thréonine";
             nomCourt = "Thr";
        }
        
        if (arn_long == "GCU" || arn_long == "GCC" || arn_long == "GCA" || arn_long == "GCG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/0/05/L-alanine-skeletal.png">';
             nomEntier = "Alanine";
             nomCourt = "Ala";
        }
        
        if (arn_long == "UAU" || arn_long == "UAC") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/2/2e/L-tyrosine-2D-skeletal.png">';
             nomEntier = "Tyrosine";
             nomCourt = "Tyr";
        }
        
        if (arn_long == "CAU" || arn_long == "CAC") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Histidine_wpmp.png">';
             nomEntier = "Histidine";
             nomCourt = "His";
        }
        
        if (arn_long == "CAA" || arn_long == "CAG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Glutamine_wpmp.png">';
             nomEntier = "Glutamine";
             nomCourt = "Gln";
        }
        
        if (arn_long == "AAU" || arn_long == "AAC") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/8/85/L-asparagine-2D-skeletal.png">';
             nomEntier = "Asparagine";
             nomCourt = "Asn";
        }
        
        if (arn_long == "AAA" || arn_long == "AAG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/L-lysine-2D-skeletal.png">';
             nomEntier = "Lysine";
             nomCourt = "Lys";
        }
        
        if (arn_long == "GAU" || arn_long == "GAC") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Aspartate_wpmp.png">';
             nomEntier = "Aspartate";
             nomCourt = "Asp";
        }
        
        if (arn_long == "GAA" || arn_long == "GAG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Glutamine_wpmp.png">';
             nomEntier = "Glutamine";
             nomCourt = "Glu";
        }
        
        if (arn_long == "UGU" || arn_long == "UGC") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Cysteine_wpmp.png">';
             nomEntier = "Cystéine";
             nomCourt = "Cys";
        }
        
        if (arn_long == "UGG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/L-tryptophan-2D-skeletal.png">';
             nomEntier = "Tryptophane";
             nomCourt = "Trp";
        }
        
        if (arn_long == "CGU" || arn_long == "CGC" || arn_long == "CGA" || arn_long == "CGG" || arn_long == "AGA" || arn_long == "AGG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/c/c6/L-arginine-skeletal-%28tall%29.png">';
             nomEntier = "Arginine";
             nomCourt = "Arg";
        }
        
        if (arn_long == "GGU" || arn_long == "GGC" || arn_long == "GGA" || arn_long == "GGG") {
             imageARN_long = '<img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Glycine-2D-skeletal.png">';
             nomEntier = "Glycine";
             nomCourt = "Gly";
        }
        
        if (arn_long == "UAA" || arn_long == "UAG" || arn_long == "UGA") {
             imageARN_long = "Codon STOP";
             nomEntier = "Codon STOP";
             nomCourt = "STOP";
        }        
        
        document.getElementById("animation").innerHTML += ' '+'<span style="color: red;">' + arn_long + '</span>'
        // generer une nouvelle ligne dans le tableau
        generate_row(nomEntier, nomCourt, imageARN_long);
        
        i+=3;
        await delay(500);
        
        }
  
        
    } 
   
           
}

function valid(){
    let x = document.getElementById("inputARN_long").value;
    if (x.length % 3 !==0 ){
        document.getElementById("btn-demarrer").disabled = true;
    }
    else {document.getElementById("btn-demarrer").disabled = false;}
}
//document.getElementById("btn-demarrer").disabled = true;
    
    
  



