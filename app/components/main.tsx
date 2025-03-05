import { useState, useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { Button, Card, Statistic, Tabs, InputNumber, Spin } from "antd";
import {
  WalletOutlined,
  LockOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

export default function App() {
  const [account, setAccount] = useState("");
  const [stakingAmount, setStakingAmount] = useState(0);
  const [apy, setApy] = useState(18.5);

  // 模拟数据加载
  const [loading, setLoading] = useState(false);

  return (
    <div className="container">
      <Card
        title={
          <div className="header">
            <LineChartOutlined style={{ fontSize: 24 }} />
            <span>NFT质押平台</span>
            {account ? (
              <Button danger icon={<LockOutlined />}>
                断开钱包
              </Button>
            ) : (
              <Button type="primary" icon={<WalletOutlined />}>
                连接钱包
              </Button>
            )}
          </div>
        }
      >
        <Tabs
          items={[
            {
              key: "dashboard",
              label: "仪表盘",
              children: (
                <Spin spinning={loading}>
                  <div className="dashboard">
                    <Statistic
                      title="当前APY"
                      value={apy}
                      suffix="%"
                      precision={2}
                    />

                    <Card title="质押操作" size="small">
                      <div className="staking-form">
                        <InputNumber
                          min={0.1}
                          max={10}
                          step={0.1}
                          addonBefore="数量"
                          addonAfter="NFT"
                          onChange={(v: any) => setStakingAmount(v)}
                        />
                        <Button type="primary" style={{ marginTop: 16 }} block>
                          立即质押
                        </Button>
                      </div>
                    </Card>

                    <Card title="我的资产" size="small">
                      <Statistic title="质押中NFT" value={3} suffix="个" />
                      <Statistic
                        title="待领取收益"
                        value={2.18}
                        precision={2}
                        suffix="ETH"
                      />
                    </Card>
                  </div>
                </Spin>
              ),
            },
            {
              key: "market",
              label: "市场数据",
              children: (
                <div className="chart-placeholder">APY趋势图表区域</div>
              ),
            },
          ]}
        />
      </Card>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 0 16px;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .dashboard {
          display: grid;
          gap: 16px;
        }
        .chart-placeholder {
          height: 300px;
          background: #f0f2f5;
          display: grid;
          place-items: center;
        }
      `}</style>
    </div>
  );
}
