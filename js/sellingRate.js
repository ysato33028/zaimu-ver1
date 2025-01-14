// データセット
const data = {
    '江東・江戸川1': [
        { 店名: '国府台駅南', 売変率: 19.94, 廃棄率: 13.11 },
        { 店名: '市川大和田5丁目', 売変率: 18.81, 廃棄率: 11.35 },
        { 店名: '市川駅南', 売変率: 7.57, 廃棄率: 3.72 },
        { 店名: '市川南2丁目', 売変率: 12.22, 廃棄率: 5.97 },
        { 店名: '南小岩8丁目', 売変率: 7.52, 廃棄率: 4.09 },
        { 店名: '西小岩3丁目', 売変率: 7.39, 廃棄率: 3.97 },
        { 店名: '東小岩3丁目', 売変率: 11.78, 廃棄率: 6.63 },
        { 店名: '東小岩6丁目', 売変率: 8.97, 廃棄率: 4.83 },
        { 店名: '南小岩5丁目', 売変率: 11.02, 廃棄率: 7.06 },
        { 店名: '南小岩3丁目', 売変率: 11.66, 廃棄率: 7.33 },
        { 店名: '北小岩1丁目', 売変率: 7.67, 廃棄率: 4.00 },
        { 店名: '京成小岩駅南', 売変率: 10.62, 廃棄率: 6.07 },
    ],
    '江東・江戸川2': [
        { 店名: '鹿骨1丁目', 売変率: 9.59, 廃棄率: 5.68 },
        { 店名: '興宮町', 売変率: 8.41, 廃棄率: 5.00 },
        { 店名: '江戸川中央2丁目', 売変率: 8.70, 廃棄率: 5.47 },
        { 店名: '松江1丁目', 売変率: 7.03, 廃棄率: 3.79 },
        { 店名: '松島4丁目', 売変率: 10.59, 廃棄率: 6.67 },
        { 店名: '松島3丁目', 売変率: 7.41, 廃棄率: 4.84 },
        { 店名: '新小岩1丁目', 売変率: 6.34, 廃棄率: 2.69 },
        { 店名: '新小岩ルミエール', 売変率: 6.00, 廃棄率: 2.61 },
        { 店名: '東新小岩4丁目', 売変率: 14.40, 廃棄率: 7.91 },
        { 店名: '東新小岩5丁目', 売変率: 7.08, 廃棄率: 3.64 },
        { 店名: '南小岩1丁目', 売変率: 8.09, 廃棄率: 4.86 },
        { 店名: '南小岩二枚橋', 売変率: 15.22, 廃棄率: 9.56 },
    ]
};

// グラフ描画用のコンテキスト
const chartContext = document.getElementById('sellingRateChart').getContext('2d');
let areaBarChart;

// グラフ更新関数
// グラフ更新関数
function updateChart(area) {
    let selectedData = data[area];

    // 売変率が高い順にソート
    selectedData = selectedData.sort((a, b) => b.売変率 - a.売変率);

    // ラベルと値を抽出
    const labels = selectedData.map(item => item.店名);
    const sellingRates = selectedData.map(item => item.売変率);
    const disposalRates = selectedData.map(item => item.廃棄率);

    // 既存のグラフを破棄して再作成
    if (areaBarChart) {
        areaBarChart.destroy();
    }
    areaBarChart = new Chart(chartContext, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '売変率 (%)',
                    data: sellingRates,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                },
                {
                    label: '廃棄率 (%)',
                    data: disposalRates,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: `${area} の売変率と廃棄率`,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: ' (%)',
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: '',
                    },
                },
            },
        },
    });
}

// イベントリスナー設定
document.getElementById('sellingRateSelect').addEventListener('change', function () {
    updateChart(this.value);
});

// 初期描画
updateChart('江東・江戸川1');

