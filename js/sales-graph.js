// 売上データ
const labels = ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'];
const currentYearSales = [24538.76819, 25207.08277, 25236.13993, 25773.69731, 26267.66896, 25555.76864, 25875.39736, 25213.13635];
const lastYearSales = [22821.05441, 23442.58698, 23469.61013, 23969.5385, 24428.93214, 23766.86484, 24064.11954, 23448.2168];

// グラフ描画
const ctx = document.getElementById('salesGraph').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: '今年度',
                data: currentYearSales,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: '昨年度',
                data: lastYearSales,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: '売上推移 (今年度 vs 昨年度)'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const value = Math.round(context.raw); // 小数点を四捨五入して整数に変換
                        return `${context.dataset.label}: ${value.toLocaleString('ja-JP')} 百万円`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: ''
                }
            },
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: '売上 (百万円)'
                },
                ticks: {
                    callback: function(value) {
                        const intValue = Math.round(value); // 小数点を四捨五入して整数に変換
                        return intValue.toLocaleString('ja-JP');
                    }
                }
            }
        }
    }
});
