string = "";
size = 8;
for(j = 0; j < size; j++){
    for(i = 0; i < size; i++){
        if(j % 2 != 0){
            if(i % 2 == 0){
                string += "#";
            } else{
                string += " ";
            }
        } else {
            if(i % 2 == 0){
                string = string + " ";
            } else{
                string += "#";
            }
        }    

}
string += "\n";
}
console.log(string);
