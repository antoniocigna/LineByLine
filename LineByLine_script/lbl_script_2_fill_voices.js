"use strict";
/*  
LineByLine: A tool to practice language comprehension
Antonio Cigna 2023
license MIT: you can share and modify the software, but you must include the license file 
*/
/* jshint strict: true */
/* jshint esversion: 6 */
/* jshint undef: true, unused: true */
//----------------------------------------------
var currScript = document.currentScript.src; var bar1 = currScript.lastIndexOf("\\");var bar2 = currScript.lastIndexOf("/"); 
console.log("LOADED file SCRIPT " + currScript.substring( 1+Math.max(bar1,bar2) )) ;	
//----------------------------------------------------------------------------------------

//======================================	
function tts_2_fill_the_voices() { 
	
	console.log("voices.length=" + voices.length); 
	var vox;
	listVox = [];
	//selected_lang_id = selected_lang_id.toLowerCase(); 
	
	//firstly the chosen language-voice
	vox = voices[selected_voice_ix];
	 
	listVox.push( [vox.lang , vox] );  
	
	var selected_lang_region = vox.lang;
	var selected_lang2  = selected_lang_region.substr(0,2);
	
	//------------------------------------------
	// secondly the same language-region 
	for(var v2=0; v2 < voices.length; v2++) {
		vox = voices[v2];
		if (v2 == selected_voice_ix) continue; 
		
		if (selected_lang_region != vox.lang ) continue;	
		
		listVox.push( [vox.lang , vox] );  		
	}
	//---------------------------------	
	// thirdly the same language
	for(var v2=0; v2 < voices.length; v2++) {
		vox = voices[v2];
		if (selected_lang_region == vox.lang ) continue;	
		if (selected_lang2 != vox.lang.substr(0,2) ) continue;				
		listVox.push( [vox.lang , vox] );  
	}
	//---------------------------------	
	//
	for(v3=0; v3 < listVox.length; v3++) {		
		var vv1, vv2; 
		[vv1,vv2] = listVox[v3]
		console.log("listVox[" +v2 + "] = " + vv1 + " " + vv2.name);
	}
	//----------------	
	var chosenIxVox=0;
	//-----------
	if (listVox.length == 0) {
		return; 
	}
	console.log("listVox length=" + listVox.length); 
	voice_toUpdate_speech = listVox[0][1] ;	

	
	var voxLang;
	var pVox = ""; var xbr; 
	var vv3=0; var v3;
	var idhvox, idh2, eleH; 
	totNumMyLangVoices = listVox.length;
	
 	
} // end of fill_the_voices()

//--------------------------
//====================================== 