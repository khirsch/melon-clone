export default function() {

  function showOnStream(element) {

    const showHideText = $(element).find('.show-hide');

    showHideText
      .addClass('hide')
      .text('Hide on stream');

    const streamPlayer = $('.stream-player__content');
    const imageId = $(element).find('img').attr('id');
    const sourceRaw = $(element).find('img').attr('src');
    const dataSource = $(element).find('img').data('source');

    streamPlayer.append(`<div class='live-cam' data-source='${dataSource}' data-image-id='${imageId}' style='background-image: url(${sourceRaw})'></div>`);
  }

  function hideOnStream(element) {

    const showHideText = $(element).find('.show-hide');

    showHideText
      .removeClass('hide')
      .text('Show on stream');

    const imageId = $(element).find('img').attr('id');

    $(`.live-cam[data-image-id=${imageId}]`).remove();
  }

  $(document).on('click', '.source', function() { 
    return (this.tog = !this.tog) ? showOnStream(this) : hideOnStream(this);
  });

}