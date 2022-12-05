'use strict'

$(document).ready(initPage)
// $('.portfolio-link').click(onActiveModal)
$('.port-modal').hide()

function initPage() {
    console.log('Started...')
    createProjects()
    console.log('gproj', gProjects)
    renderPortfolio()
}

function renderPortfolio() {
    var projs = gProjects
    var strHtmls = projs.map(
        (proj) => `  
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" onclick="onActiveModal('${proj.id}')">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="../img/portfolio/${proj.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
          </div>`
    )

    document.querySelector('.port-projects').innerHTML = strHtmls.join('')
}

function onActiveModal(projId){
   const proj =  getProjById(projId)
    renderModal(proj)
}

function renderModal(proj){
    $('.port-modal').show()
    console.log('pppppp', proj);
    $('.port-modal h2').text(proj.name)
    $('.port-modal h3 span').text(proj.title)
    $('.port-modal p').text(proj.desc)
    $('.port-modal button').click(onCloseModal)
    $('.game-link').html(`<a href="${proj.url}" target="_blank" >Open the project!</a>`)
}

function onCloseModal() {
    $('.port-modal').hide()
}