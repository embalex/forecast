import React from 'react'

export const Arrow = props => (
    <svg width={18} height={18} viewBox="0 0 64 64" {...props}>
        <path d="M32 0C14.355 0 0 14.355 0 32s14.355 32 32 32 32-14.355 32-32S49.645 0 32 0zm0 62C15.458 62 2 48.542 2 32S15.458 2 32 2s30 13.458 30 30-13.458 30-30 30z" />
        <path d="M27 32c0 2.757 2.243 5 5 5s5-2.243 5-5-2.243-5-5-5-5 2.243-5 5zm8 0c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3z" />
        <path d="M32 5.171l-.837 1.282C30.666 7.214 19 25.153 19 32c0 7.168 5.832 13 13 13s13-5.832 13-13c0-6.847-11.666-24.786-12.163-25.547L32 5.171zM32 43c-6.065 0-11-4.935-11-11 0-4.796 7.293-17.299 11-23.15C35.707 14.701 43 27.204 43 32c0 6.065-4.935 11-11 11z" />
    </svg>
);