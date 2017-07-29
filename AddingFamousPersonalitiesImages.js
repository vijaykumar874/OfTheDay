<script type="text/javascript">
function displayImages()
{
  var d = new Date();
  var month = parseInt(d.getMonth())+1;
  var date = month+"_"+d.getDate();
  var pics=[["6_19","https://lh5.googleusercontent.com/TEgCmHzQf0PXHEl2kFVtkkjIzRIbbClufo2D-R7i5bHMNEM2TYbxrTJ83wR_y02QoAyd9qYAwjrtFlg=w1366-h662-rw"],
["6_19","https://lh3.googleusercontent.com/QThCqe34vMIy0dHpY2iuDuHTWL5gdjczv3EteFpSmjG_5U4VPIzkTirSC8N5I2AWCEV9A-LgKzKGKU0=w1366-h662"],
["6_19","https://lh4.googleusercontent.com/Tg6TpjO-9Lm-m8jwrBUnWmvobug9MOdMd84vpIAWgZcW9dEjtPG8vIe21A2euEYbhQVPxF-iMKAUe1c=w1366-h662-rw"],
["6_22","https://lh6.googleusercontent.com/Vn3hf62J_MWEAdiZxLmV-g5ptehWQu7BhxyR6M-YWmqxgTYBjWqX2cQbQTz3ALH4s1J8-WCgo9PIJag=w1366-h662-rw"],
["6_22","https://lh3.googleusercontent.com/6L-62w8T9N5dNe-9ev0zV8SnhLs1ql2j4KrPrMuKnlZ6IdotwrSvRpiPv_UMS7EhMQwmklfMx7bkhkE=w1366-h662-rw"],
["6_22","https://lh5.googleusercontent.com/Kn3JtWCPfaqthPw5NrHyWgyEnWLLW5P7p1bLZG4-tqJXu99xg7jg34MY6Ao9s9eSz0MYLKhsnu55-FY=w1366-h662-rw"],
["6_24","https://lh5.googleusercontent.com/6EQAwJVCCz8gpihruinDgoz9TvjEu6eqEYtVFFQEcBo1ii5pgQKIC6Dv4AYEMq_AHs3R2MVIaTAzIDA=w1366-h662-rw"],
["6_25","https://lh3.googleusercontent.com/WE7GVtjKIIL8amqGbcsKBQUvXvuDtaP1q0vE_t-N6tRsevm2N4wNJIvPe_uDMg1Cg1hh_G4_hgl0SyY=w1366-h662-rw"],
["6_25","https://lh3.googleusercontent.com/-xxWOB4pvr54Cf-8-0a1dNvmHpyFiiLOWOMNGXMTmDC9QnvnxRmnOEe3zvxbYzuE684EWXkY8QBPqaQ=w1366-h662-rw"],
["6_26","https://lh6.googleusercontent.com/i2jeSwtbGqsMMvM4HIDaJeZosOXWQlOt6NYFCQw93jdsLyaCFsKw_CyKjzylRCxChtOcyF-AFRrO3aE=w1366-h662-rw"],
["6_27","https://lh4.googleusercontent.com/n39mj_fncoOCl7qTXfP4iUT9zf9W8TfOU9Wr7USc67nQIvdDblmnI2IF91Ci_7OsDHtYFZW5vEMOpOc=w1366-h662-rw"],
["6_27","https://lh5.googleusercontent.com/MhRGT0QGhfkJ9Ku6uoqOpvQDg8tOyHg_gfiO-HWrZViRecgUCWEiAdoqKx4ShWhFixh8MSyEy-dN3F8=w1366-h662-rw"],
["6_28","https://lh5.googleusercontent.com/dKh1tczYKKM2-BL-HYoAAzZk-ERZ7YDW59QWr9b0TL51a3dTv_O6SFQ4hIz-c9mUy8xyEPPNPsz3C94=w1366-h662-rw"],
["6_30","https://lh3.googleusercontent.com/bItF-S-9-qgtm3oV21IgnK4rtv22B1QpObc-8fxRm0wUrKkHntDgeoRMlYSnUfkkLv7UB1cKboa35P0=w1366-h662-rw"]
];
  var code="";
  for(i=0;i<pics.length;i++)
  {
    if(pics[i][0].localeCompare(date)==0)
    {
      code = code + "<img src=\"" + pics[i][1] + "\" height=\"65\" width=\"65\"/>";
    }
  }
  code = code + "<img src=\"https://lh3.googleusercontent.com/-tpirLklTkio/AAAAAAAAAAI/AAAAAAAAAAw/IU4Y_0_sm3s/s60-p-rw-no/photo.jpg\" height=\"65\" width=\"65\"/>";
  document.getElementById("pplotd").innerHTML = code;
}
</script>
<a id='pplotd'><script>displayImages()</script></a>