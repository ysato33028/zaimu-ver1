document.addEventListener("DOMContentLoaded", function () {
    // データ
    const data = {
        "江東・江戸川1": [
            { 店名: "国府台駅南", 客単価: 867, 買上点数: 4.587 },
            { 店名: "市川大和田5丁目", 客単価: 922, 買上点数: 5.106 },
            { 店名: "市川駅南", 客単価: 889, 買上点数: 4.747 },
            { 店名: "市川南2丁目", 客単価: 911, 買上点数: 4.868 },
            { 店名: "南小岩8丁目", 客単価: 799, 買上点数: 4.319 },
            { 店名: "西小岩3丁目", 客単価: 935, 買上点数: 4.822 },
            { 店名: "東小岩3丁目", 客単価: 909, 買上点数: 4.832 },
            { 店名: "東小岩6丁目", 客単価: 913, 買上点数: 5.084 },
            { 店名: "南小岩5丁目", 客単価: 766, 買上点数: 4.225 },
            { 店名: "南小岩3丁目", 客単価: 975, 買上点数: 5.080 },
            { 店名: "北小岩1丁目", 客単価: 849, 買上点数: 4.414 },
            { 店名: "京成小岩駅南", 客単価: 814, 買上点数: 4.434 },
        ],
        "江東・江戸川2": [
            { 店名: "鹿骨1丁目", 客単価: 1062, 買上点数: 5.475 },
            { 店名: "興宮町", 客単価: 1080, 買上点数: 5.530 },
            { 店名: "江戸川中央2丁目", 客単価: 1016, 買上点数: 5.383 },
            { 店名: "松江1丁目", 客単価: 945, 買上点数: 5.041 },
            { 店名: "松島4丁目", 客単価: 795, 買上点数: 4.176 },
            { 店名: "松島3丁目", 客単価: 1004, 買上点数: 5.166 },
            { 店名: "新小岩1丁目", 客単価: 714, 買上点数: 3.977 },
            { 店名: "新小岩ルミエール", 客単価: 688, 買上点数: 3.849 },
            { 店名: "東新小岩4丁目", 客単価: 903, 買上点数: 5.010 },
            { 店名: "東新小岩5丁目", 客単価: 757, 買上点数: 4.186 },
            { 店名: "南小岩1丁目", 客単価: 993, 買上点数: 5.529 },
            { 店名: "南小岩二枚橋", 客単価: 822, 買上点数: 4.708 },
        ],
    };

    // チャートの初期化
    const ctx = document.getElementById("scatterChart").getContext("2d");
    let scatterChart = null;

    // グラフの更新関数
    function updateChart(area) {
        const areaData = data[area].map((item) => ({
            x: item.客単価,
            y: item.買上点数,
            label: item.店名,
        }));

        const dataset = {
            datasets: [
                {
                    label: `${area} の店舗`,
                    data: areaData,
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                },
            ],
        };

        if (scatterChart) scatterChart.destroy();

        scatterChart = new Chart(ctx, {
            type: "scatter",
            data: dataset,
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const { label, x, y } = context.raw;
                                return `${label}: 客単価 ${x} 円, 買上点数 ${y}`;
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        title: { display: true, text: "客単価 (円)" },
                    },
                    y: {
                        title: { display: true, text: "買上点数" },
                    },
                },
            },
        });
    }

    // 初期表示
    const areaSelect = document.getElementById("areaSelect");
    areaSelect.addEventListener("change", (e) => updateChart(e.target.value));
    updateChart(areaSelect.value);
});
