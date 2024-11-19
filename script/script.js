
function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    
    
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    
   
    imageDiv.textContent = previewPic.alt;
    
    console.log(`Image Source: ${previewPic.src}, Alt Text: ${previewPic.alt}`);
}


function unDo() {
    const imageDiv = document.getElementById('image');
    
    
    imageDiv.style.backgroundImage = '';
    
    
    imageDiv.textContent = 'Hover over an image below to display here';
}


const previews = document.querySelectorAll('.preview');
previews.forEach((preview) => {
    preview.addEventListener('mouseover', () => upDate(preview));
    preview.addEventListener('mouseout', unDo);
});
