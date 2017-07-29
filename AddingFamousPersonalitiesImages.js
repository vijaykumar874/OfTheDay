<script type="text/javascript">
function displayImages()
{
  var d = new Date();
  var month = parseInt(d.getMonth())+1;
  var date = month+"_"+d.getDate();
  var pics=[["7_29","https://2.bp.blogspot.com/-RyQh6_vd4Qw/WVfbiY-UhSI/AAAAAAAAASU/LLBdJvBy3tM0aYiH6Klb4loYi0PguGMBgCLcBGAs/s320/Teacher.png"]];
  var code="";
  for(i=0;i<pics.length;i++)
  {
    if(pics[i][0].localeCompare(date)==0)
    {
      code = code + "<img src=\"" + pics[i][1] + "\" height=\"65\" width=\"65\"/>";
    }
  }
  code = code + "<img src=\"https://2.bp.blogspot.com/-RyQh6_vd4Qw/WVfbiY-UhSI/AAAAAAAAASU/LLBdJvBy3tM0aYiH6Klb4loYi0PguGMBgCLcBGAs/s320/Teacher.png\" height=\"65\" width=\"65\"/>";
  document.getElementById("pplotd").innerHTML = code;
}
</script>
<a id='pplotd'><script>displayImages()</script></a>
