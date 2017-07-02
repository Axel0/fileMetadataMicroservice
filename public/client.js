// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
 var form = $('form')[0]; 
 var formData = new FormData(form);
 formData.append('file', $('input[type=file]')[0].files[0])
  
   $.ajax({
    url: '/file',
    data: formData,
    type: "POST", 
    contentType: false,
    processData: false,
})

});
