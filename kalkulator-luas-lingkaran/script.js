const inputJariJari = document.getElementById('input-jari-jari');
const tombolHitungLuas = document.getElementById('tombol-hitung-luas');
const outputLuasLingkaran = document.getElementById('output-luas-lingkaran');
const angkaDalamRumus = document.getElementById('angka-dalam-rumus');
const hasilPerhitunganRumus = document.getElementById(
	'hasil-perhitungan-rumus',
);

tombolHitungLuas.addEventListener('click', () => {
	const jariJari = inputJariJari.valueAsNumber;

	// Validasi input
	if (isNaN(jariJari) || jariJari <= 0) {
		alert('Jari-jari harus berupa angka positif');
		return;
	}

	// Hitung luas lingkaran
	const PI = Math.PI.toFixed(3);
	const hasilLuas = PI * jariJari ** 2;
	outputLuasLingkaran.innerHTML = `${hasilLuas} cm<sup>2</sup>`;

	// Update angka-angka pada langkah dan rumus
	angkaDalamRumus.innerHTML = `L = 3,142 x ${jariJari}<sup>2</sup>`;
	hasilPerhitunganRumus.innerHTML = `L = ${hasilLuas} cm<sup>2</sup>`;

	// Hapus nilai pada input
	inputJariJari.value = '';
	tombolHitungLuas.disabled = true;

	// Scroll ke hasil untuk mengalihkan perhatian user
	window.scroll({
		top: outputLuasLingkaran.offsetTop,
		behavior: 'smooth',
	});
});
