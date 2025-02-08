module bcd_to_7segment (
    input x,y,z,w,
    output a,b,c,d,e,f,g
);
    assign a=((z&~w) | (x&~w) | (~x&z) | (~x&y&w) | (~y&~w) | (z&y) | (~z&x&~y));
    assign b=((~x&~y) | (~y&~w) | (~x&~z&~w) | (x&~z&w) |(~x&z&w));
    assign c=((~x&y) | (~y&x) | (~z&w) | (~x&~z) | (~x&w));
    assign d=((x&~z) | (~x&~y&z) | (y&z&~w) | (x&~y&w) | (~z&y&w) | (~x&~y&~w));
    assign e=((z&~w) | (x&y) | (x&z) | (~y&~w));
    assign f=((x&~y) | (~z&~w) | (~x&y&~z) | (x&z) | (y&z&~w));
    assign g=((z&~w) | (x&~y) | (x&w) | (~x&y&~z) | (~x&~y&z));
endmodule