/*
* Created by Chathuranga on 17/01/2015
*/

var string_val= ["Alpha", "Bravo", "Charlie", "Delta", "Echo",
		 "Foxtrot", "Golf", "Hotel", "India", "Juliet",
		 "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", 
		 "Quebec", "Romeo", "Sierra", "Tango", "Uniform",
		 "Victor", "Whiskey", "X-ray", "Yankee", "Zulu"]; // 26 Strings

var int_val = [57, 23, 100, 12, 34, 91, 0, -1, 16, -25, 
		1, 3, 8, 17, 19, 75, 87, 1001, 101, 203, 
	       49, 63, 547, 281, 99, -23, -100, -78, -12, -566]; // 30 int numbers

var float_val = [21.2, 10.0, 22.5, 101.4, 11.1, 9.8, 0.2, -23.5, 5.6, -0.7,  
		 49.6, 103.1, 0.1, 99.8, -34.1, -66.0, 49.0, 100.0, 100.9, 118.7, 
		705.8, 111.3, 0.9, 4.4, 3.3, 4.6, -10.9, 77.2, -89.6, 69.6]; // 30 float numbers

var double_val = [21.267, 10.023, 22.512, 101.478, 11.190, 9.823, 0.211, -23.533, 5.612, -0.743,  
		  49.643, 103.145, 0.156, 99.856, -34.156, -66.012, 49.077, 100.001, 100.911,
 		 118.711, 705.822, 111.311, 0.900, 4.400, 3.333, 4.699, -10.999, 77.266, -89.643,
		  69.623]; // 30 double numbers

var long_val =  [572221, 233121, 100342, 121551, 340912, 910012, 100011, -155643, 161111, -250987, 
		 117711, 332345, 800121, 174331, 191122, 750011, 878767, 100156, 101767, 203121, 
	         493212, 631122, 547323, 281121, 990881, -231122, -100764, -789823, -128494,
		-566845]; // 30 long numbers

var bool_val = ["false", "true"]; // 2 bool values
	
var text=""; // text for inputArea
var def_prompt="";	// stream format definition prompt
//var inputArea = dw.jq('textArea').attr('id','wranglerInput');
var single=true; // controlled by 'option' radio button on wrangler.html
var stream=["empty"];

/*function appendInputAreaTo(container){
	container.append(inputArea);
}*/

/*function getInputArea(){
	return inputArea;
}*/

function set_def_promt(str){
	def_prompt=str;
}

function get_def_prompt(){
	return def_prompt;
}
function writeSampleForQuery(query){
	var insideBrackets=query.substring(query.indexOf("(")+1,query.indexOf(")")).trim();
	var params = insideBrackets.split(",");
	for(var i=0; i<params.length; i++){
		var temp=params[i].trim();
		params[i]=temp.substring(temp.lastIndexOf(" ")+1,temp.length).toUpperCase();
	}
	return writeSample(params);
	
}
function writeSample(stream_def){
	text="";
	stream=stream_def;
	if(stream[0]==="empty"){	//there is no any stream definition in CEP
		//inputArea.attr('value', "Not selcted a valid input stream");
		return null;
	}

	
	var rand=0;
	var events=1;	// Single event
	if(!single)	//Collection of events
		events=5;	// 5 events
		
	for(var k=0; k<events; k++){
		if(k!=0)
			text += "\n";	
		for(var i=0; i<stream_def.length; i++){
			
			if(stream_def[i]==="STRING"){
				rand=Math.floor(Math.random()*26);//generate a random integer(0-25)
				text += string_val[rand];	// pick a random string
				if(i != stream_def.length -1){
					text += ",";
				}
			}
	
			if(stream_def[i]==="INT"){
				rand=Math.floor(Math.random()*30);//generate a random integer(0-29)
				text += int_val[rand];		// pick a random integer
				if(i != stream_def.length -1){
					text += ",";
				}
			}
			//similar with above two if structure
			if(stream_def[i]==="FLOAT"){
				rand=Math.floor(Math.random()*30);
				text += float_val[rand];
				if(i != stream_def.length -1){
					text += ",";
				}
			}

			if(stream_def[i]==="LONG"){
				rand=Math.floor(Math.random()*30);
				text += long_val[rand];
				if(i != stream_def.length -1){
					text += ",";
				}
			}

			if(stream_def[i]==="DOUBLE"){
				rand=Math.floor(Math.random()*30);
				text += double_val[rand];
				if(i != stream_def.length -1){
					text += ",";
				}
			}

			if(stream_def[i]==="BOOL"){
				rand=Math.floor(Math.random()*2);
				text += bool_val[rand];
				if(i != stream_def.length -1){
					text += ",";
				}
			}
		}

		
	}
	//inputArea.attr('value', text); //write to input area.
	return text;
}

function setStreamDef(list){
	def_prompt = "Input Stream Format: [ ";
	for(var i=0; i<list.length; i++){
		def_prompt += list[i];
		if(i != list.length-1)
			def_prompt += " , ";
	}
	def_prompt += " ]";
}


