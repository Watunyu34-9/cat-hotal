'use client'
import React from 'react'
import { ConfigProvider } from 'antd'

type Props = {
    children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <ConfigProvider
        theme={{
            components: {
                Button: {
                    colorPrimary: '#feb52a',
                    colorPrimaryHover: '#FFFFFF',
                    colorPrimaryActive: '#feb52a',
                    colorPrimaryBorder : '#feb52a',
                    colorPrimaryText: '#feb52a',
                }
            }
        }}    
    >
        {children}
    </ConfigProvider>
  )
}
