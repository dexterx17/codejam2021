function sumar(m, row, col, suma){
    if(m[row][col-1]){
        return suma += m[row-1][col];
    }
    if(m[row-1][col]){
        return suma += m[row-1][col];
    }
    
    suma = sumar(m,row--,col,suma)
}

function suma_matriz(m){
    let total = 0;

    for (let row = m.length-1; row >0; row--) {
        for (let col = m[0].length-1; col > 0; col--) {
            const element =  m[row][col];
            total += element
            console.log(element);
            console.log('element');
        }
    }
    
    //suma_matriz()
    console.log('total: ',total);
}

// let m1 = m = [[0,0,0],[0,1,1], [0,1,1]];
// suma_matriz(m1);

function combinar(letters,resultado){

    let letra = "";
    let header = "";
    console.log('--------------------');
    console.log('letra: ',letra);
    console.log('header: ',header);

    for (let col = 0; col < letters.length; col++) {
        const element = letters[index];
        letra += element;

        // if(letra.length>1 && index>0){
        //     console.log('element: ',letra);
        //     columnas.push(header)
        // }
    }
}

function generar_header(letra, header, letters){
    let local_header= ""
    for (let index = 0; index < letters.length; index++) {
        nueva_letra = letters[index];
        local_header = letra+nueva_letra;
        header = local_header;
        //columnas.push(header)
        console.log('----------------');
        console.log('header',header);
        console.log('local_header',local_header);
        console.log('letra',letra);
        console.log('nueva_letra',nueva_letra);
        console.log('index',index);
        console.log('letters.length',letters.length);
        if(header.length!=letters.length){
            // return generar_header(letra,header,letters);
        }else{
            return "";
        }

        // for (let i_nl = 0; i_nl < letters.length; i_nl++) {
        //     let nueva_letra = letters[i_nl];
        //     header = letra+nueva_letra;
        // }
    }
}

function custom_header(letters, n){
    console.log('letters: ',letters);
    console.log('n: ',n);

    let counter = 0;
    let columnas = [];

    for (let i_fc = 0; i_fc < letters.length; i_fc++) {
        columnas.push(letters[i_fc])
    }

    let letra = letters[0];
    let header = "";
    generar_header(letra, header, letters)

    for (let index = 0; index < letters.length; index++) {
        letra = letters[index];
        header += letra;
        console.log('----------------------------');
        console.log('letra: ',letra);
        for (let i_nl = 0; i_nl < letters.length; i_nl++) {
            let nueva_letra = letters[i_nl];
            header = letra+nueva_letra;
            console.log('nueva_letra: ',nueva_letra);
            console.log('header: ',header);
            columnas.push(header)
        }
    }

    console.log('columnas: ',columnas);



    return columnas[n];
}


// console.log('-----GENERAR 9954554--------')
// console.log('res: ',custom_header("LJVRKMMMNUXPRUP",9954554));

// console.log('-----GENERAR 0--------')
// console.log('res: ',custom_header("FHIK",22525));

function generarSecuencia(n){
    console.log('n',n);
    let contador = 0;
    let secuencia =  1.0;
    let aux = 1;

    let secuenciasList = [1];
    do{
        if(aux<=3){
            aux++;
            secuencia++
        }else{
            aux=1;
            secuencia--;
        }
        secuenciasList.push(secuencia);

        contador++;
    }while(contador<=n)

    return secuenciasList;
}

function obtenerPosicionSecuencia(n){
    console.log('n',n);
    let secuencia = generarSecuencia(n)
    console.log('secuencia',secuencia);
    console.log('resultado: ',secuencia[n]);
    return secuencia[n]
}

// console.log('-----GENERAR 0--------')
// console.log(obtenerPosicionSecuencia(0));

// console.log('------ GENERAR 5-------')
// console.log(obtenerPosicionSecuencia(5));

// console.log('--------GENERAR 545421 -----')
// console.log(obtenerPosicionSecuencia(545421));

// console.log('--------GENERAR 4611686018327187 -----')
// console.log(obtenerPosicionSecuencia(4611686018327187));

// console.log('--------GENERAR 81239812739128371 -----')
// console.log(obtenerPosicionSecuencia(81239812739128371));

function arrayCreator(size, u){
    console.log('size: ',size)
    console.log('u: ',u)
    for (let index = 0; index < size; index++) {
        console.log(`[ `);           
        // for (let el = 1; el <= u; el++) {
        //     for (let v = 0; v < el <= u; v++) {
        //         console.log(`${el}, ${v} `);           
                
        //     }
        // }
        console.log(`]`);           
    }
}


// console.log('-------------')
// console.log(arrayCreator(1,3));

// console.log('-------------')
// console.log(arrayCreator(3,3));

function sumaArray(input){
    let max_sum = 0;
    let min_num = 0;

    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        let sum = 0
        input.splice(index,1).forEach(i =>{
            console.log('i: ',i);
            sum += i;
        })
        console.log('suma: ',sum);
    }
}

sumaArray([1,2,3,3,3,3,4,5,6,6]);

function distancia_Minima_v2(texto,subtext){
    let n = texto.length;    
    let n_sub = subtext.length;

    let desde_inicio = texto.indexOf(subtext);
    
    console.log('texto: '+texto);
    console.log('desde_inicio: '+desde_inicio);
    let desde_fin = n+(desde_inicio+n_sub);
    console.log('desde_fin: '+desde_fin);
    return   desde_inicio>desde_fin ? desde_fin : desde_inicio;
}

function distancia_Minima(texto,subtext){
    console.log('texto: ',texto);
    console.log('subtext: ',subtext);
    let desde_inicio = texto.indexOf(subtext);
       
    let text_invertido = "";
    for (let i = texto.length-1; i >= 0; i--) {
        text_invertido += texto[i];
    }
    let subtext_invertido = "";
    for (let i = subtext.length-1; i >= 0; i--) {
        subtext_invertido += subtext[i];
    }
    let desde_fin = text_invertido.indexOf(subtext_invertido);
    return   desde_inicio>desde_fin ? desde_fin : desde_inicio;
}

// var res = distancia_Minima_v2("vamos por ese premio", "zz");
// console.log('res', res)


console.log('-------------')



// console.log('-------------')
// var res = distancia_Minima("wmsbexxcherystodmtfvldoaazzwrcbnoxtrprmoxapcdtkedzyxebdeazzadueyvpudeinbzshoprybjgkaxyyajybslslcnlitdcfzoebcnnqlckjpwihmleezgtbrqmygdlqmabcwmjuzulgxfbimebehakskuptbizbnxepezlfujlkdtwpmweppkbqgymrepinn", "kasasdkydwg");
// console.log('res', res)


// console.log('-------------')
// var res = distancia_Minima("axucgrzqebtbuxpiyuavccltqwcmpzmmfaakncabbbdxepyevkswxhlellrfobyufmyumrorcgmjilzogezuggtxotzukeifvybxkacmwvkhswcoabmgwknminltbdqexopvysobpautmkmiuipuzfqpmwzdprxnadedrquxzassyfgrrjmgfenwmynehqnabgajrnfgdfvftghczetmhcakgnvjuuctufjgoqowhwtozkskaszvfpijugitoextqibynisnfbenweojapwtclszycusagzwbgavxawzfnuhmpddgzyymuxurdqkfkejsqdesmmzlxuokmloduolwyslonilvhjlqtftyxfoaopmvvomiddncnwqmxozqbmhuqpksuydcwwwuxvdfwrfiizcccktmfxcpdtunnknagsgntpnccgimnqketezhsbyrofjvwoqvturvwzttugivywdnqtzjnkyfdzkqcabyinwsoxqlxwecczjgwwcgomuoogaxmbxcwjbjqozjxrzcyojylanjlpcdzgeraxhbaybxsuhcuvlsshmeblbdfaziubugweeckkvxqgtdrrsbxparablqpypqtenytfbntudlyakehtwhbbtngusmjaudcbazjfeqjufbileiwtylkkfkdmtertqzayaohzkuokkuplcwqrcwzxeqlzbhlubycufmwbvvvveeweqmezxxnxmjcajlurjtzuxxjartvvvegmrgpjigfazhpoaqeshxakbcxnghxhddcydmzqgsejyrstktdpcaeqpiqnzyebaioirhvlckxamorbriylesbwszzletemgyfcjyhpsmjandcxdrsjvfzuswuoxybtxzmhjqhbcxbhxdhbxjbrecpuvutlfyamkltfogwklisxhscgvwufckkszpejndjxzsaizjkzuxengwgbpdssryllxmzgejtwmqyehdtymzivyygtqqbcu", "vvve");
// console.log('res', res)

// console.log('-------------')
// var res = distancia_Minima("yfuajpocenamocibexujhalinesvlijlmylxmpexvfddpejowufvkbzkwlmxeoyartjholmpzxeuhquvmiuhgvasitvtgiexvunqhoeeowkpwbwwvipeptperrnljsomwcnrvpjmhfsjgixkopmxbgtlogplujljwxodbfczsxgondmgfhpicdroumealpplxkozuusmufmojyatfthxjlkdzewjfvjmijmkqppvhoedbhxnruuonntgstdbxchxyztnoqttgigyaxtyjlpfckefclzuylaskhgynmopqkbafsrnvifjuurmafusdqbziqpejdscfvyepevmfodjchakjndqcyvlleoxyadpzcmphchajrrbumoivxruwdliknfhgpdjfxreosblkjyjtrmjrqmfjheamkmckipseuzhvqcgyortoaheajxfiziunqgzizijoawrvjeyvcrmtpedrzkdukhzjjnaiejfxtkfpdpgdhsskfkfyusgfaefpodnprtcwtwfmjtyfwlsiqtgwnvluxkmvgmvshgikrteakgydwtbnhqfbtnynlwghstcpvufrvjxoehamfbvnjrrccwqgickbynzjzroyyiirnsdchfbivviqnbmhtercgvqolwzlixigoddxiukmitymvljojpwjjdmteegbqwgovnxanresklkiabrnlfumxtmuclccbkajcbrmmdzfdzzcftqiuaadcfrfocdpifyrasthgkmufkoyvlopavsjpmjystcuwtrqxsrymlmjbdapjmtcsberjknhyawbkeeimdmhtpuixkmllpqbjhqpzfybemsilpzzrlifxjxhskzengcldevyswdtxqkniuiffjqwdhjushlowheuotpfinwodqzfcjcypgqrtvpclogidofispdmgdjbscpouxckilknnqcjwydqzfbfnrwfahkmorcndxqwljefekdpafbsdoldbmkvizvtzko", "jfx");
// console.log('res', res)

// var res = distancia_Minima("abcdefgci", "c");
// console.log('res', res)