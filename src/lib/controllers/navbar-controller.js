
export const menuNavBar=["menu1","menu2","menu3"];

export const changePage=(event,doc)=>{
  const bubbleElements =["bubble1","bubble2","bubble3"];
  const bgbubbleElements=["bgBubble1","bgBubble2","bgBubble3"];
  const idEvent=event.currentTarget.id;
  const idNumber=idEvent.replace('menu','');
  const bubbleNew=`bubble${idNumber}`;
  const bgbubbleNew=`bgBubble${idNumber}`;
  const result=bubbleElements.filter(element=>element!=bubbleNew);
  const bgResult= bgbubbleElements.filter(element=>element!=bgbubbleNew); 
  doc.querySelector("#"+bubbleNew).style.transform="translateY(0%)";
  doc.querySelector("#"+bubbleNew).style.display="block";
   result.forEach(element=>{doc.querySelector("#"+ element).style.transform="translateY(120%)";doc.querySelector("#"+ element).style.boxShadow=" 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";});
   bgResult.forEach(element=>doc.querySelector("#"+ element).style.display="none");
}

