package com.tencent.qcloud.tuikit.tuichat.ui.view.message.viewholder;

import android.content.Context;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;

import com.tencent.qcloud.tuikit.tuichat.R;
import com.tencent.qcloud.tuikit.tuichat.bean.message.ReplyMessageBean;
import com.tencent.qcloud.tuikit.tuichat.bean.message.TUIMessageBean;
import com.tencent.qcloud.tuikit.tuichat.bean.message.reply.TUIReplyQuoteBean;
import com.tencent.qcloud.tuikit.tuichat.bean.message.reply.TextReplyQuoteBean;
import com.tencent.qcloud.tuikit.tuichat.component.face.FaceManager;
import com.tencent.qcloud.tuikit.tuichat.ui.view.message.reply.TUIReplyQuoteView;
import com.tencent.qcloud.tuikit.tuichat.ui.view.message.reply.TextReplyQuoteView;
import com.tencent.qcloud.tuikit.tuichat.util.ChatMessageParser;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;

public class ReplyMessageHolder extends MessageContentHolder {

    private View originMsgLayout;

    private TextView senderNameTv;
    private TextView replyContentTv;
    private FrameLayout quoteFrameLayout;

    public ReplyMessageHolder(View itemView) {
        super(itemView);
        senderNameTv = itemView.findViewById(R.id.sender_tv);
        replyContentTv = itemView.findViewById(R.id.reply_content_tv);
        originMsgLayout = itemView.findViewById(R.id.origin_msg_abs_layout);
        quoteFrameLayout = itemView.findViewById(R.id.quote_frame_layout);
    }

    @Override
    public int getVariableLayout() {
        return R.layout.message_adapter_content_reply;
    }

    @Override
    public void layoutVariableViews(TUIMessageBean msg, int position) {
        ReplyMessageBean replyMessageBean = (ReplyMessageBean) msg;
        TUIMessageBean replyContentBean = replyMessageBean.getContentMessageBean();
        String replyContent = replyContentBean.getExtra();
        String senderName = replyMessageBean.getOriginMsgSender();
        senderNameTv.setText(senderName + ":");
        FaceManager.handlerEmojiText(replyContentTv, replyContent, false);

        performMsgAbstract(replyMessageBean, position);

        msgContentFrame.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                if (onItemClickListener != null) {
                    onItemClickListener.onMessageLongClick(view, position, msg);
                }
                return true;
            }
        });
        originMsgLayout.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View v) {
                if (onItemClickListener != null) {
                    onItemClickListener.onMessageLongClick(v, position, msg);
                }
                return true;
            }
        });
    }

    private void performMsgAbstract(ReplyMessageBean replyMessageBean, int position) {
        TUIMessageBean originMessage = replyMessageBean.getOriginMessageBean();

        TUIReplyQuoteBean replyQuoteBean = replyMessageBean.getReplyQuoteBean();
        if (originMessage != null) {
            performQuote(replyQuoteBean);
        } else {
            performNotFound(replyQuoteBean);
        }

        originMsgLayout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (onItemClickListener != null) {
                    onItemClickListener.onReplyMessageClick(v, position, replyMessageBean.getOriginMsgId());
                }
            }
        });

    }

    private void performNotFound(TUIReplyQuoteBean replyQuoteBean) {
        String typeStr = ChatMessageParser.getMsgTypeStr(replyQuoteBean.getMessageType());
        String abstractStr = replyQuoteBean.getDefaultAbstract();
        if (ChatMessageParser.isFileType(replyQuoteBean.getMessageType())) {
            abstractStr = "";
        }
        TextReplyQuoteBean textReplyQuoteBean = new TextReplyQuoteBean();
        textReplyQuoteBean.setText(typeStr + abstractStr);
        TextReplyQuoteView textReplyQuoteView = new TextReplyQuoteView(itemView.getContext());
        textReplyQuoteView.onDrawReplyQuote(textReplyQuoteBean);
        quoteFrameLayout.removeAllViews();
        quoteFrameLayout.addView(textReplyQuoteView);
    }

    private void performQuote(TUIReplyQuoteBean replyQuoteBean) {
        Class<? extends TUIReplyQuoteView> quoteViewClass = replyQuoteBean.getReplyQuoteViewClass();
        if (quoteViewClass != null) {
            TUIReplyQuoteView quoteView = null;
            try {
                Constructor quoteViewConstructor = quoteViewClass.getConstructor(Context.class);
                quoteView = (TUIReplyQuoteView) quoteViewConstructor.newInstance(itemView.getContext());
            } catch (NoSuchMethodException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
            if (quoteView != null) {
                quoteView.onDrawReplyQuote(replyQuoteBean);
                quoteFrameLayout.removeAllViews();
                quoteFrameLayout.addView(quoteView);
            }
        }
    }
}
