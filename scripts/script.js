//загрузить объект с подсказками
const tips = {
      "country":"Категория <b>\"По странам и территориям\"</b> позволяет провести фильтрацию карманных календарей и&nbsp;открыток по стране их происхождения.",
      "type": "В категории <b>\"По типу\"</b> представлены карманные календари и открытки, отсортированные по типу: обычные, с маркой, с 3D-эффектом и другие.",
      "theme":"Категория <b>\"По тематике\"</b> позволяет быстро отсортировать карманные календари и открытки по&nbsp;основным темам, представленным на сайте.",
      "number":"Категория <b>\"По количеству изображений\"</b> включает карманные календари и открытки, отфильтрованные по количеству изображений: 1, 2 или 3 и более.",
      "year":"В категории <b>\"По году\"</b> представлены карманные календари и открытки, отсортированные по году выпуска.",
      "format":"Категория <b>\"По формату\"</b> позволяет отсортировать карманные календари и открытки по их размеру.",
      "orientation":"Категория <b>\"По ориентации\"</b> включает карманные календари и открытки, отсортированные по двум видам - с книжной или альбомной ориентацией."
}

window.onload = function() {
      //получить доступ к блокам div, на которых будет всплывать подсказка, вызвать функцию explain
      const pointsToExplain = document.querySelectorAll(".category div");

      for (let i = 0; i < pointsToExplain.length; i++){
            if (pointsToExplain[i].dataset.tooltip) {             //если есть подсказка
                 pointsToExplain[i].onmouseover = explain;
            }
      }
}

function explain () {
      //console.log("Функция explain по наведению на блок вызвана!");

      const elem = this;                              //ссылка на объект, на кот-й навели (div)
      // console.log(`this при клике это ${elem}`);
      const coord = elem.getBoundingClientRect();     //координаты объекта, на кот-й навели (div)

      const container = document.querySelector("#information");

      if (elem.dataset.tooltip) {
            container.className = "tip";
            container.style.display = "block";

           //позиция элемента относительно документа, НЕ зависит от прокрутки
           let x = coord.left + window.scrollX; 
           let y = coord.top + window.scrollY;
           container.style.top = y + elem.offsetHeight + "px";
           container.style.left = x + "px";

            container.innerHTML = tips[elem.dataset.tooltip];
           
            elem.onmouseout = function() {            
                  container.style.display = "none";
            }
      }
}
