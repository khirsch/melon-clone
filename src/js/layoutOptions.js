export default function() {

  setInterval(function() {

    const liveCam = $('.live-cam');
    const layoutOptions = $('.layout-options');

    if (liveCam.length > 0) {
      layoutOptions.show();
    } else {
      layoutOptions.hide();
    }

    liveCam.each(function() {

      const dataSource = $(this).attr('data-source');

      if (dataSource === 'screen') {
        console.log('Show screenshare layout options');
      }

      if (dataSource === 'webcam') {
        console.log('Show webcam layout options');
      }

    });
    
  }, 200);

}

// Would this be better executed with a switch?