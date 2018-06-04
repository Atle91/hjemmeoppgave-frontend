$(document).ready(() => {
	console.log();
	$.getJSON("../articles.json", (data) => {
		//Create categories
		data.Categories.map((category, i) => {
			const $title = $("<h1>")
				.addClass("category__title")
				.text(category.Title.toUpperCase());
			const $category = $("<div>")
				.addClass("category")
				.css("background", category.Color)
				.append($title);
			$(".categories").append($category);

		})
		//Sort by date
		const articles = data.Articles.sort((cur, next) => {
			return next.Date - cur.Date 
		})
		//Create each article
		articles.map((article, i) => {
			const $article = $("<div>").addClass("article");
			const title = article.Title[0].toUpperCase() + article.Title.slice(1);
			const $title = $("<h1>")
					.addClass("article__title")
					.text(title);
			const $img = $(`<img src=${article.Image}>`)
			const $p = $("<p>").text(article.Text);
			const date = extractDate(new Date(article.Date*1000).toString());
			const $date = $("<p>")
					.addClass("artical__date")
					.text(date.date);
			const $time = $("<p>")
					.addClass("artical__time")
					.text(date.time);
			const container = $article.append([$title, $img,$p, $date,$time]);
			$(`.category:eq(${article.Category -1})`).append(container);
		})
	})

	
})
function extractDate(fulldate){
		const date = fulldate.slice(0,15);
		const time = fulldate.slice(16,24);
		return {
			date,
			time
		};
}