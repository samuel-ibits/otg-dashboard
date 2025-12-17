"use client";

import { Star } from "lucide-react";

const MOCK_REVIEWS = [
    {
        id: '1',
        user: 'Gloria Adams',
        rating: 5,
        date: '18/07/24',
        content: 'This is not my first time in Cafe One and I will always come here for their amazing coffee and croissant with great atmospheric condi...',
        images: [
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=200',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=200',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=200',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=200',
        ]
    },
    {
        id: '2',
        user: 'Gloria Adams',
        rating: 5,
        date: '18/07/24',
        content: 'This is not my first time in Cafe One and I will always come here for their amazing coffee and croissant with great atmospheric condi...',
        images: [
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=200',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=200',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=200',
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=200',
        ]
    },
];

export function BranchReviews() {
    return (
        <div className="space-y-8">
            <div className="flex items-start gap-12 bg-white rounded-lg">
                <div className="w-48">
                    <h2 className="text-5xl font-bold text-gray-900 mb-2">4.5</h2>
                    <div className="flex gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">150+ reviews</p>
                </div>

                <div className="flex-1 max-w-md space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-4">
                            <span className="text-sm font-medium w-3">{rating}</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-400 rounded-full"
                                    style={{ width: rating === 5 ? '80%' : rating === 4 ? '40%' : '10%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 pb-4 border-b">
                {['Most relevant', 'Newest', 'Highest', 'Lowest'].map((filter, i) => (
                    <button
                        key={filter}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium border ${i === 0 ? 'bg-gray-100 border-gray-100 text-gray-900' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="space-y-8">
                {MOCK_REVIEWS.map((review) => (
                    <div key={review.id} className="space-y-4 pb-8 border-b last:border-0 border-gray-100">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-yellow-700 flex items-center justify-center text-white font-semibold">
                                    {review.user.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">{review.user}</h4>
                                    <span className="text-xs text-gray-400">100+ reviews</span>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="flex gap-0.5 justify-end mb-1">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-400">{review.date}</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            {review.content} <button className="font-semibold underline">more</button>
                        </p>

                        <div className="grid grid-cols-4 gap-2">
                            {review.images.map((img, i) => (
                                <div key={i} className="aspect-video rounded-md overflow-hidden bg-gray-100">
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
