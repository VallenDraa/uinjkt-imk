const inputJariJari = document.getElementById('input-jari-jari');
const tombolHitungLuas = document.getElementById('tombol-hitung-luas');
const outputLuasLingkaran = document.getElementById('output-luas-lingkaran');
const angkaDalamRumus = document.getElementById('angka-dalam-rumus');
const hasilPerhitunganRumus = document.getElementById(
	'hasil-perhitungan-rumus',
);
const historiPerhitungan = JSON.parse(localStorage.getItem('histori')) || [];

inputJariJari.addEventListener('input', () => {
	const jariJari = inputJariJari.valueAsNumber;
	tombolHitungLuas.disabled = isNaN(jariJari) || jariJari <= 0;
});

tombolHitungLuas.addEventListener('click', () => {
	const jariJari = inputJariJari.valueAsNumber;

	if (isNaN(jariJari) || jariJari <= 0) {
		alert('Angka harus lebih dari 0!');
		return;
	}

	// Hitung luas lingkaran
	const PI = Math.PI.toFixed(3);
	const hasilLuas = PI * jariJari ** 2;
	outputLuasLingkaran.innerHTML = `${hasilLuas} cm<sup>2</sup>`;

	// Update angka-angka pada langkah dan rumus
	angkaDalamRumus.innerHTML = `L = 3,142 x ${jariJari}<sup>2</sup>`;
	hasilPerhitunganRumus.innerHTML = `L = ${hasilLuas} cm<sup>2</sup>`;

	// Tambahkan perhitungan ke histori
	historiPerhitungan.push({
		jariJari: jariJari,
		hasilLuas: hasilLuas,
	});
	localStorage.setItem('histori', JSON.stringify(historiPerhitungan));

	// Tampilkan histori perhitungan
	tampilkanHistori();

	// Hapus nilai pada input
	inputJariJari.value = '';

	// Scroll ke hasil untuk mengalihkan perhatian user
	window.scroll({
		top: outputLuasLingkaran.offsetTop,
		behavior: 'smooth',
	});
});

function tampilkanHistori() {
	const historiList = document.getElementById('histori-list');
	historiList.innerHTML = ''; // Bersihkan histori sebelum menambahkan lagi

	historiPerhitungan.forEach((item, index) => {
		const historiItem = document.createElement('li');
		historiItem.innerHTML = `1. Jari-jari = ${item.jariJari}, Luas = ${item.hasilLuas} cm<sup>2</sup>`;
		historiList.appendChild(historiItem);
	});
}

tampilkanHistori();
