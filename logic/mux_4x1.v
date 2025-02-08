module mux_4x1 (
    input a,b,c,d,
    input [1:0] sel,
    output r

);
        // case (sel)
        //     2'b00: assign r=a;
        //     2'b01: assign r=b; 
        //     2'b10: assign r=c; 
        //     2'b11: assign r=d;
        //     default: assign r = 1'b0;
        // endcase

assign r = sel[1] ? (sel[0] ? d : c) : (sel[0] ? b : a);
    
endmodule