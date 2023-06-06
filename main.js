const shareBtn = document.getElementById("share");
const shareBtnMobile = document.getElementById("share__mobile");
const shareTooltip = document.getElementById("article__share");

console.log(shareTooltip);

shareBtn.onclick = () => toggleTooltip();
shareBtnMobile.onclick = () => toggleTooltip();

const toggleTooltip = () => {
	const status = shareTooltip.getAttribute("data-open");

	if (status === "false") {
		shareTooltip.setAttribute("data-open", true);
	} else {
		shareTooltip.setAttribute("data-open", false);
	}
};
