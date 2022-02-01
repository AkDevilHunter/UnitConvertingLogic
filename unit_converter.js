function handleChange(){
    
    function getValue(id){
        return document.getElementById(id).value;
 }
 
 var one_from_unit_equals = getValue("equals_number"); // 1 kilometer is equal to 1000 meter
 

 
    function getValue(id){
        return document.getElementById(id).value;
    }
    function setValue(id,val){
        return document.getElementById(id).value = val;
    }
    if(getValue("from_unit_number") !== ""){
        return document.getElementById("to_unit_number").value = getValue("from_unit_number") * one_from_unit_equals;
        // setValue("from_unit_number","");
    }
    if(getValue("to_unit_number") !== ""){
        return document.getElementById("from_unit_number").value = getValue("to_unit_number") / one_from_unit_equals;
        // setValue("to_unit_number","");
    }

 
 
 }

 document.getElementById("submitForm").addEventListener("click", handleChange);
