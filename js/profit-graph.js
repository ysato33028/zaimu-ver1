(function () {
    // 営業利益データ
    const labels = ['3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'];
    const currentYearSales = [7693.046656, 7902.567169, 7911.676757, 8080.204126, 8235.067114, 8011.882219, 8112.087682, 7904.465];
    const lastYearSales = [7154.53339, 7349.387467, 7357.859384, 7514.589837, 7658.612416, 7451.050464, 7544.241544, 7351.15245];

    // グラフ描画
    const ctx = document.getElementById('profitGraph').getContext('2d');
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
            ],
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
                    text: '営業利益推移 (今年度 vs 昨年度)'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const value = Math.round(context.raw); // 小数点を四捨五入して整数に変換
                            return `${context.dataset.label}: ${value.toLocaleString('ja-JP')} 千円`;
                        },
                    },
                },
            },
            scales: {
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
                        },
                    },
                },
            },
        },
    });
})();
