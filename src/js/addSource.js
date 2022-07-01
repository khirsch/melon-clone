export default function() {

  const preview = $('.source-preview');
  const placeholder = $('.source-placeholder');

  function previewSource(event, source) {
    
    if (event.target.files) {
      [].forEach.call(event.target.files, readAndDisplay);
    }

    function readAndDisplay(file) {
      if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
        return alert(
          file.name +
            ' is not an image! Please upload a jpeg, jpg, png or gif file to proceed.'
        );
      }

      const reader = new FileReader();

      reader.addEventListener('load', function () {
        const image = new Image();
        const imageId = Math.floor(Math.random() * 1000000);
        image.src = reader.result;
        preview.append(
          `<div class='source' data-source='${source}'>
            <img data-source='${source}' id='${imageId}' src='${image.src}'>
            <span class='show-hide'>Show on stream</span>
          </div>`
        );
        $.modal.close();
        placeholder.hide();
      });

      reader.readAsDataURL(file);
    }
  }

  $('#screenshare').on('change', (e) => previewSource(e, 'screen'));
  $('#video-feed').on('change', (e) => previewSource(e, 'webcam'));

}