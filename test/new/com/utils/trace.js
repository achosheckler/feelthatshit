/*
--------------------------------------------------------------------------------------------------------------------
Trace
--------------------------------------------------------------------------------------------------------------------
re-routes console.log statements to a trace function, which can be centrally turned off
for deployment as well as for IE where console.log isn't supported.
*/

var trace_showTraces = true;
var trace_initiated = false;
var trace_divListFallback = false;
var trace_divListContainer;
var trace_divListVisible = true;
var trace_divList;

function trace_init (str){
	trace_initiated = true;

	if(trace_showTraces){

		//try to use console.log, if it errors then showTraces is set to false;
		try
		{
			console.log('');
		}
		catch(err){
			trace_showTraces = false;
			if(trace_divListFallback){
				var divListContainer = document.createElement("div");
				document.body.appendChild(divListContainer);

				divListContainer.id = 'divListContainer';
				divListContainer.style.position = 'absolute';
				divListContainer.style.top = '0px';
				divListContainer.style.left = '0px';
				divListContainer.style.height = '100%';
				divListContainer.style.width = '700px';
				divListContainer.style.background = '#000000';
				divListContainer.style.color = '#FFFFFF';
				divListContainer.style.fontSize = '10px';

				var divList = document.createElement("ul");
				divListContainer.appendChild(divList);
				divList.style.height = '100%';
				divList.style.width = '100%';
				divList.style.overflow = 'scroll';

				var divListToggle = document.createElement("div");
				divListContainer.appendChild(divListToggle);
				addListener(divListToggle, 'click', trace_toggleDivList, false);

				divListToggle.style.position = 'absolute';
				divListToggle.style.top = '0px';
				divListToggle.style.left = '100%';
				divListToggle.style.color = '#000000';
				divListToggle.style.padding = '5px';
				divListToggle.style.padding = '5px';
				divListToggle.style.background = '#FFFFFF';
				divListToggle.style.fontWeight = 'bold';
				divListToggle.innerHTML = 'TOGGLE<br/>TRACE';

				trace_divListContainer = divListContainer;
				trace_divList = divList;
			}
		}
	} else{
		trace_divListFallback = false;
	}
}

function trace_toggleDivList(e){
	trace_divListVisible = !trace_divListVisible;
	divListContainer.style.left = (trace_divListVisible)?'0px':'-700px';
}

function trace(str){
	if(!trace_initiated)trace_init();
	if(trace_showTraces){
		console.log(str);
	}else if(trace_divListFallback){
		var newTrace = document.createElement("li");
		newTrace.innerHTML = String(str);

		trace_divList.appendChild(newTrace);
	}
}
