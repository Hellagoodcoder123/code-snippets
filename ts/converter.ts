var convert={
  binary:function(toConvert:string){
    var values = ["01100001 ","01100010 ","01100011 ","01100100 ","01100101 ","01100110 ","01100111 ","01101000 ","01101001 ","01101010 ","01101011 ","01101100 ","01101101 ","01101110 ","01101111 ","01110000 ","01110001 ","01110010 ","01110011 ","01110100 ","01110101 ","01110110 ","01110111 ","01111000 ","01111001 ","01111010 ",'01000001 ','01000010 ','01000011 ','01000100 ','01000101 ','01000110 ','01000111 ','01001000 ','01001001 ','01001010 ','01001011 ','01001100 ','01001101 ','01001110 ','01001111 ','01010000 ','01010001 ','01010010 ','01010011 ','01010100 ','01010101 ','01010110 ','01010111 ','01011000 ','01011001 ','01011010 ',"00110000 ","00110001","00110010","00110011","00110100","00110101","00110110","00110111","00111000","00111001","00100001 ","01000000 ","00100011 ","00100100 ","00100101 ","01011110 ","00100110 ","00101010 ","00101000 ","00101001 ","00101101 ","01011111 ","00101011 ","00111101 ","01011011 ","01011101 ","01111011 ","01111101 ","01011100 ","01111100 ","00111011 ","00111010 ","00100111 ","00100010 ","00101111 ","00111111 ","00101100 ","00111100 ","00101110 ","00111110 ","01100000 ","01111110 ","00001001 ","00001001 ","00100000 ","00100000"];
    var order = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","]","{","}","\\","|",";",":","'","\"","/","?",",","<",".",">","`","~","\u0009","\t","\u0020"," "];
    var converted = []
    var onChar = 0;
    value.split('').forEach(function(){converted.push(values[order.indexOf(value.split('')[onChar])]);onChar+=1});
    return converted.join("");
  }
}
