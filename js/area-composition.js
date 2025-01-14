(function () {
    // データ
    const labels = [
        '品川・目黒',
        '新宿・世田谷',
        '千代田・川口',
        '文京・板橋',
        '練馬・杉並',
        '台東・葛飾',
        '江東・江戸川',
        '大田',
        '川崎',
        '北横浜',
        '南横浜',
        '新業態',
    ];
    const data = [
        10.15347498,
        9.614280474,
        8.278293585,
        8.224078314,
        9.450104007,
        9.543343011,
        8.971679619,
        9.867258636,
        8.374776305,
        8.511135326,
        8.805361824,
        0.206213922,
    ];

    // カラー
    const backgroundColors = [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9F40',
        '#E7E9ED',
        '#F7464A',
        '#46BFBD',
        '#FDB45C',
        '#949FB1',
        '#4D5360',
    ];

    // グラフ描画
    const ctx = document.getElementById('areaCompositionChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut', // 'pie' に変更で円グラフ
        data: {
            labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: backgroundColors,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const value = context.raw;
                            return `${context.label}: ${value.toFixed(2)}%`;
                        },
                    },
                },
                legend: {
                    position: 'top',
                },
            },
        },
    });
})();
