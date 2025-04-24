const relativeText = document.getElementById("select-relative-example");
const vpText = document.getElementById("select-vp-example");
const absoluteText = document.getElementById("select-absolute-example");
const angleText = document.getElementById("select-angle-example");
const durationText = document.getElementById("select-duration-example");

const inputRelative = document.getElementById("input-relative");
const inputVp = document.getElementById("input-vp");
const inputAbsolute = document.getElementById("input-absolute");
const inputAngle = document.getElementById("input-angle");
const inputDuration = document.getElementById("input-duration");

const selectRelative = document.querySelector("#select-option-relative");
const selectVp = document.querySelector("#select-option-vp");
const selectAbsolute = document.querySelector("#select-option-absolute");
const selectAngle = document.querySelector("#select-option-angle");
const selectDuration = document.querySelector("#select-option-duration");

const btnRelative = document.getElementById("btn-relative");
const btnVp = document.getElementById("btn-vp");
const btnAbsolute = document.getElementById("btn-absolute");
const btnAngle = document.getElementById("btn-angle");
const btnDuration = document.getElementById("btn-duration");
const btnDurationHide = document.getElementById("btn-duration-hide");

console.log(btnDuration);

btnRelative.addEventListener("click", () => {
	const index = selectRelative.options.selectedIndex;
	relativeText.style.fontSize = `${inputRelative.value}${selectRelative.options[index].value}`;
	relativeText.innerHTML = `<p>font-size: ${inputRelative.value}${selectRelative.options[index].value}; </p>`;
});

btnVp.addEventListener("click", () => {
	const index = selectVp.options.selectedIndex;
	vpText.style.fontSize = `${inputVp.value}${selectVp.options[index].value}`;
	vpText.innerHTML = `<p>font-size: ${inputVp.value}${selectVp.options[index].value}; </p>`;
});

btnAbsolute.addEventListener("click", () => {
	const index = selectAbsolute.options.selectedIndex;
	absoluteText.style.fontSize = `${inputAbsolute.value}${selectAbsolute.options[index].value}`;
	absoluteText.innerHTML = `<p>font-size: ${inputAbsolute.value}${selectAbsolute.options[index].value}; </p>`;
});

btnAngle.addEventListener("click", () => {
	const index = selectAngle.options.selectedIndex;
	angleText.style.background = `conic-gradient(#5cc96d ${inputAngle.value}${selectAngle.options[index].value}, transparent 0rad 2rad)`;
	angleText.innerHTML = `<p style= " margin:0; padding:80px 0;">Angle: ${inputAngle.value}${selectAngle.options[index].value}; </p>`;
});

btnDuration.addEventListener("click", () => {
	const index = selectDuration.options.selectedIndex;
	durationText.style.transition = `${inputDuration.value}${selectDuration.options[index].value}`;
	durationText.style.opacity = "1";
});

btnDurationHide.addEventListener("click", () => {
	durationText.style.tranistion = "0.5s";
	durationText.style.opacity = "0";
});

const colorInputRed = document.getElementById("color-inputRed");
const colorInputGreen = document.getElementById("color-inputGreen");
const colorInputBlue = document.getElementById("color-inputBlue");
const colorInputAlpha = document.getElementById("color-inputAlpha");
const colorBar = document.getElementById("color-bar");

colorInputRed.addEventListener("input", () => {
	colorBar.style.background = `rgb(${colorInputRed.value}, ${colorInputGreen.value}, ${colorInputBlue.value}, ${colorInputAlpha.value})`;
	colorBar.innerHTML = `<p style="color: white; margin: 0; padding: 10px 0;">rgb(${colorInputRed.value}, ${colorInputGreen.value}, ${colorInputBlue.value}, ${colorInputAlpha.value})</p>`;
});

colorInputGreen.addEventListener("input", () => {
	colorBar.style.background = `rgb(${colorInputRed.value}, ${colorInputGreen.value}, ${colorInputBlue.value}, ${colorInputAlpha.value})`;
	colorBar.innerHTML = `<p style="color: white; margin: 0; padding: 10px 0;">rgb(${colorInputRed.value}, ${colorInputGreen.value}, ${colorInputBlue.value}, ${colorInputAlpha.value})</p>`;
});

colorInputBlue.addEventListener("input", () => {
	colorBar.style.background = `rgb(${colorInputRed.value}, ${colorInputGreen.value}, ${colorInputBlue.value}, ${colorInputAlpha.value})`;
	colorBar.innerHTML = `<p style="color: white; margin: 0; padding: 10px 0;">rgb(${colorInputRed.value}, ${colorInputGreen.value}, ${colorInputBlue.value}, ${colorInputAlpha.value})</p>`;
});

colorInputAlpha.addEventListener("input", () => {
	colorBar.style.background = `rgb(${colorInputRed.value}, ${colorInputGreen.value}, ${colorInputBlue.value}, ${colorInputAlpha.value})`;
	colorBar.innerHTML = `<p style="color: white; margin: 0; padding: 10px 0;">rgb(${colorInputRed.value}, ${colorInputGreen.value}, ${colorInputBlue.value}, ${colorInputAlpha.value})</p>`;
});
