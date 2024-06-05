function displayImage(){
    let y = document.getElementById("ARN").value;
    let x = y.toUpperCase();

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